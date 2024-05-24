import WebSocket from 'ws';
import { ResilientWebSocketClient } from './utils/websocketClient';
import { config } from './config';

type WebSocketCallback<T> = (message: T) => void;

enum WebSocketType {
  LivePrices = 1,
  LiveQuotes = 2,
  LiveRfqs = 3,
  LiveWrappedOpenQuotes = 4,
  LiveOpenQuoteFilled = 5,
  LiveWrappedCloseQuotes = 6,
}

export class PionerWebsocketClient<T> {
  private wsClient?: ResilientWebSocketClient;
  private readonly wsEndpoint: string;
  private readonly protocol: string;
  private onMessageCallback?: WebSocketCallback<T>;
  private onErrorCallback?: (error: Error) => void;
  private onReconnectCallback?: () => void;
  private onCloseCallback?: () => void;

  constructor(
    type: WebSocketType,
    onMessage?: WebSocketCallback<T>,
    onError?: (error: Error) => void,
    onReconnect?: () => void,
    onClose?: () => void,
  ) {
    this.protocol = config.https ? 'wss' : 'ws';

    if (type === WebSocketType.LivePrices) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_prices`;
    } else if (type === WebSocketType.LiveQuotes) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_quotes`;
    } else if (type === WebSocketType.LiveRfqs) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_rfqs`;
    } else if (type === WebSocketType.LiveWrappedOpenQuotes) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_wrapped_open_quotes`;
    } else if (type === WebSocketType.LiveOpenQuoteFilled) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_open_quote_filled`;
    } else if (type === WebSocketType.LiveWrappedCloseQuotes) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_wrapped_close_quotes`;
    } else {
      throw new Error('Invalid WebSocket type');
    }

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
      let message: T;
      try {
        message = JSON.parse(data.toString()) as T;
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
    if (this.onErrorCallback) {
      this.onErrorCallback(error);
    }
  }
}
