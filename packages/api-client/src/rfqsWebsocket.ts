import WebSocket from 'ws';
import { ResilientWebSocketClient } from './utils/websocketClient';
import { config } from './config';
import { RfqResponse } from './types/responses';

export type PriceFeedRequestConfig = {
  verbose?: boolean;
  binary?: boolean;
  allowOutOfOrder?: boolean;
};

type ServerMessage = RfqResponse;

export class RfqWebsocketClient {
  private wsClient?: ResilientWebSocketClient;
  private readonly wsEndpoint: string;
  private readonly protocol: string;
  private onMessageCallback?: (message: ServerMessage) => void;
  private onErrorCallback?: (error: Error) => void;
  private onReconnectCallback?: () => void;
  private onCloseCallback?: () => void;

  constructor(
    onMessage?: (message: ServerMessage) => void,
    onError?: (error: Error) => void,
    onReconnect?: () => void,
    onClose?: () => void,
  ) {
    this.protocol = config.https ? 'wss' : 'ws';
    this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live-rfqs`;
    this.onMessageCallback = onMessage;
    this.onErrorCallback = onError;
    this.onReconnectCallback = onReconnect;
    this.onCloseCallback = onClose;
  }

  public async startWebSocket(token: string) {
    if (!this.wsEndpoint) {
      throw new Error('Websocket endpoint is undefined.');
    }

    if (this.wsClient) {
      throw new Error('wsClient is already set.');
    }

    this.wsClient = new ResilientWebSocketClient(this.wsEndpoint, token);

    this.wsClient.onError = this.onWsError.bind(this);

    this.wsClient.onReconnect = () => {
      if (this.onReconnectCallback) {
        this.onReconnectCallback();
      }
    };

    this.wsClient.onClose = () => {
      if (this.onCloseCallback) {
        this.onCloseCallback();
      }
    };

    this.wsClient.onMessage = (data: WebSocket.Data) => {
      let message: ServerMessage;
      try {
        message = JSON.parse(data.toString()) as ServerMessage;
        if (this.onMessageCallback) {
          this.onMessageCallback(message);
        }
      } catch (error) {
        this.onWsError(
          new Error(`Error parsing message ${data.toString()} as JSON.`),
        );
      }
    };

    return await this.wsClient.startWebSocket();
  }

  public closeWebSocket() {
    this.wsClient?.closeWebSocket();
    this.wsClient = undefined;
  }

  private onWsError(error: Error) {
    /*if (typeof process !== "undefined" && typeof process.exit === "function") {
            Logger.error('ws', `Caught an error: ${error}`);
            Logger.error('ws', 'Halting the process due to the websocket error');
            /*try {
                this.closeWebSocket();
                this.subscribeRfqs();
            } catch (error) {
                if (error instanceof Error) {
                    Logger.error('app', `Caught an error: ${error.message}`);
                }
            
        }
        else {
        Logger.error('ws', 'Cannot halt process. Please handle the websocket error.');
        }*/
    if (this.onErrorCallback) {
      this.onErrorCallback(error);
    }
  }
}
