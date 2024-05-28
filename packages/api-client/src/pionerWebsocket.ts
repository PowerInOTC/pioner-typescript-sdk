import { ResilientWebSocketClient } from './utils/websocketClient';
import { config } from './config';
import {
  PositionResponse,
  PriceResponse,
  QuoteResponse,
  RfqResponse,
  signedCloseQuoteResponse,
  signedWrappedOpenQuoteResponse,
} from './types';

type WebSocketCallback<T> = (message: T) => void;

export enum WebSocketType {
  LivePrices = 1,
  LiveQuotes = 2,
  LiveRfqs = 3,
  LiveWrappedOpenQuotes = 4,
  LiveCloseQuotes = 5,
  LivePositions = 6,
}

type ResponseMapping = {
  [WebSocketType.LivePrices]: PriceResponse;
  [WebSocketType.LiveQuotes]: QuoteResponse;
  [WebSocketType.LiveRfqs]: RfqResponse;
  [WebSocketType.LiveWrappedOpenQuotes]: signedWrappedOpenQuoteResponse;
  [WebSocketType.LiveCloseQuotes]: signedCloseQuoteResponse;
  [WebSocketType.LivePositions]: PositionResponse;
};

export class PionerWebsocketClient<T extends WebSocketType> {
  private wsClient?: ResilientWebSocketClient;
  private readonly wsEndpoint: string;
  private readonly protocol: string;
  private onMessageCallback?: WebSocketCallback<ResponseMapping[T]>;
  private onErrorCallback?: (error: Error) => void;
  private onReconnectCallback?: () => void;
  private onCloseCallback?: () => void;

  constructor(
    type: T,
    onMessage?: WebSocketCallback<ResponseMapping[T]>,
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
    } else if (type === WebSocketType.LiveCloseQuotes) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_close_quotes`;
    } else if (type === WebSocketType.LivePositions) {
      this.wsEndpoint = `${this.protocol}://${config.serverAddress}:${config.serverPort}/live_positions`;
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

    this.wsClient.onMessage = (data) => {
      let message: ResponseMapping[T];
      try {
        message = JSON.parse(data.toString()) as ResponseMapping[T];
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
