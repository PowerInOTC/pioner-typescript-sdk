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
  private readonly host: string;
  private onMessageCallback?: WebSocketCallback<ResponseMapping[T]>;
  private onErrorCallback?: (error: Error) => void;
  private onReconnectCallback?: () => void;
  private onOpenCallback?: () => void;
  private onCloseCallback?: () => void;

  constructor(
    type: T,
    onMessage?: WebSocketCallback<ResponseMapping[T]>,
    onOpen?: () => void,
    onClose?: () => void,
    onReconnect?: () => void,
    onError?: (error: Error) => void,
    options?: { serverAddress?: string },
  ) {
    let parsedUrl = null;
    if (options && options.serverAddress) {
      parsedUrl = new URL(options.serverAddress);
    } else {
      parsedUrl = new URL(config.serverAddress);
    }
    this.protocol = parsedUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    this.host = parsedUrl.host;

    if (type === WebSocketType.LivePrices) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_prices`;
    } else if (type === WebSocketType.LiveQuotes) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_quotes`;
    } else if (type === WebSocketType.LiveRfqs) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_rfqs`;
    } else if (type === WebSocketType.LiveWrappedOpenQuotes) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_wrapped_open_quotes`;
    } else if (type === WebSocketType.LiveCloseQuotes) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_close_quotes`;
    } else if (type === WebSocketType.LivePositions) {
      this.wsEndpoint = `${this.protocol}//${this.host}/api/v1/live_positions`;
    } else {
      throw new Error('Invalid WebSocket type');
    }

    this.onMessageCallback = onMessage;
    this.onOpenCallback = onOpen;
    this.onCloseCallback = onClose;
    this.onReconnectCallback = onReconnect;
    this.onErrorCallback = onError;
  }

  public async startWebSocket(token: string) {
    if (!this.wsEndpoint) {
      throw new Error('Websocket endpoint is undefined.');
    }

    if (this.wsClient) {
      throw new Error('wsClient is already set.');
    }

    this.wsClient = new ResilientWebSocketClient(
      `${this.wsEndpoint}?token=${token}`,
    );

    this.wsClient.onError = this.onWsError.bind(this);

    this.wsClient.onReconnect = () => {
      if (this.onReconnectCallback) {
        this.onReconnectCallback();
      }
    };

    this.wsClient.onOpen = () => {
      if (this.onOpenCallback) {
        this.onOpenCallback();
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
