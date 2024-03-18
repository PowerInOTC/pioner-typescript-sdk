import WebSocket from 'ws';

const PING_TIMEOUT_DURATION = 30000; // 30s

export class ResilientWebSocketClient {
  private endpoint: string;
  private wsClient: undefined | WebSocket;
  private wsUserClosed: boolean;
  private wsFailedAttempts: number;
  private pingTimeout: undefined | NodeJS.Timeout;
  private token: undefined | string;

  onError: (error: Error) => void;
  onMessage: (data: WebSocket.Data) => void;
  onReconnect: () => void;
  onClose: () => void;

  constructor(endpoint: string, token?: string) {
    this.endpoint = endpoint;
    this.token = token ? token : undefined;
    this.wsUserClosed = true;
    this.wsFailedAttempts = 0;
    this.onError = () => {};
    this.onMessage = () => {};
    this.onReconnect = () => {};
    this.onClose = () => {};
  }

  /*async send(data: any) {

    await this.waitForMaybeReadyWebSocket();

    if (this.wsClient === undefined) {
        this.onError(
          new Error(
            `Couldn't connect to the websocket server. Error callback is called.`,
          ),
        );
    } else {
      this.wsClient?.send(data);
    }
  }*/

  async startWebSocket() {
    if (this.wsClient !== undefined) {
      return;
    }

    const headers = this.token ? { Authorization: this.token } : undefined;
    this.wsClient = new WebSocket(this.endpoint, { headers: headers });

    this.wsUserClosed = false;

    this.wsClient.onopen = () => {
      this.wsFailedAttempts = 0;
      // Ping handler is undefined in browser side so heartbeat is disabled.
      if (this.wsClient!.on !== undefined) {
        this.heartbeat();
      }
    };

    this.wsClient.onerror = (event) => {
      this.onError(event.error);
    };

    this.wsClient.onmessage = (event) => {
      this.onMessage(event.data);
    };

    this.wsClient.onclose = async (event) => {
      if (this.pingTimeout !== undefined) {
        clearInterval(this.pingTimeout);
      }

      if (this.wsUserClosed === false) {
        if (event.code == 3000 || event.code == 4000 || event.code == 1001) {
          this.onError(new Error(event.reason));
        } else {
          this.wsFailedAttempts += 1;
          this.wsClient = undefined;
          const waitTime = expoBackoff(this.wsFailedAttempts);
          this.onError(
            new Error(
              `Connection closed unexpectedly or because of timeout. Reconnecting after ${waitTime}ms.`,
            ),
          );
          await sleep(waitTime);
          this.restartUnexpectedClosedWebsocket();
        }
      }
      this.onClose();
    };

    if (this.wsClient.on !== undefined) {
      // Ping handler is undefined in browser side
      this.wsClient.on('ping', this.heartbeat.bind(this));
    }

    await this.waitForMaybeReadyWebSocket();
    if (
      this.wsClient == undefined ||
      this.wsClient.readyState !== this.wsClient.OPEN
    ) {
      return false;
    }
    return true;
  }

  /**
   * Heartbeat is only enabled in node clients because they support handling
   * ping-pong events.
   *
   * This approach only works when server constantly pings the clients which.
   * Otherwise you might consider sending ping and acting on pong responses
   * yourself.
   */
  private heartbeat() {
    if (this.pingTimeout !== undefined) {
      clearTimeout(this.pingTimeout);
    }

    this.pingTimeout = setTimeout(() => {
      this.wsClient?.terminate();
      this.restartUnexpectedClosedWebsocket();
    }, PING_TIMEOUT_DURATION);
  }

  private async waitForMaybeReadyWebSocket() {
    let waitedTime = 0;
    while (
      this.wsClient !== undefined &&
      this.wsClient.readyState !== this.wsClient.OPEN
    ) {
      if (waitedTime > 5000) {
        this.wsClient.close();
        return;
      } else {
        waitedTime += 10;
        await sleep(10);
      }
    }
  }

  private async restartUnexpectedClosedWebsocket() {
    if (this.wsUserClosed === true) {
      return;
    }

    await this.startWebSocket();

    if (this.wsClient === undefined) {
      this.onError(new Error("Couldn't reconnect to websocket"));
      return;
    }

    this.onReconnect();
  }

  closeWebSocket() {
    if (this.wsClient !== undefined) {
      const client = this.wsClient;
      this.wsClient = undefined;
      client.close();
    }
    this.wsUserClosed = true;
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function expoBackoff(attempts: number): number {
  return 2 ** attempts * 100;
}
