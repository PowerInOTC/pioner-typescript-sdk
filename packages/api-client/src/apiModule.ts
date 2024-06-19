import axios, { AxiosResponse } from 'axios';
import { WalletClient } from 'viem';
import { config } from './config';
import {
  QuoteRequest,
  RfqRequest,
  SignedCancelCloseQuoteRequest,
  SignedCancelOpenQuoteRequest,
  SignedCloseQuoteRequest,
  SignedFillOpenQuoteRequest,
  SignedWrappedOpenQuoteRequest,
} from './types/requests';
import {
  PositionResponse,
  PricesResponse,
  QuoteResponse,
  RfqResponse,
  signedCancelCloseQuoteResponse,
  signedCancelOpenQuoteResponse,
  signedCloseQuoteResponse,
  signedFillOpenQuoteResponse,
  signedWrappedOpenQuoteResponse,
} from './types/responses';
import { PionResult } from './types/pion';

export class ApiInterface {
  public serverAddress: string;

  constructor(serverAddress?: string) {
    if (!serverAddress) {
      this.serverAddress = config.serverAddress;
    } else {
      this.serverAddress = serverAddress;
    }
  }

  async getPrices(
    symbols: string[],
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<PricesResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    let url = `${this.serverAddress}/api/v1/get_prices`;
    url += '?ids=' + symbols.join(',');

    return await axios.get(url, {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async sendRfq(
    rfq: RfqRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<RfqResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(`${this.serverAddress}/api/v1/submit_rfq`, rfq, {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async getRfqs(
    token: string,
    options?: {
      id?: string;
      start?: number;
      end?: number;
      timeout?: number;
    },
  ): Promise<AxiosResponse<RfqResponse[]> | undefined> {
    const { id, start, end, timeout = 3000 } = options || {};

    return await axios.get(`${this.serverAddress}/api/v1/get_rfqs`, {
      headers: {
        Authorization: token,
      },
      params: { id: id, start: start, end: end },
      timeout: timeout,
    });
  }

  async sendQuote(
    quote: QuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<QuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getQuotes(
    rfqId: string,
    token: string,
    options?: {
      start?: number;
      end?: number;
      timeout?: number;
    },
  ): Promise<AxiosResponse<QuoteResponse[]> | undefined> {
    const { start, end, timeout = 3000 } = options || {};

    return await axios.get(`${this.serverAddress}/api/v1/get_quotes`, {
      params: {
        rfqId: rfqId,
        start: start,
        end: end,
      },
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async sendSignedWrappedOpenQuote(
    quote: SignedWrappedOpenQuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedWrappedOpenQuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_signed_wrapped_open_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getSignedWrappedOpenQuotes(
    version: string,
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedWrappedOpenQuoteResponse[]> | undefined> {
    const { onlyActive, start, end, issuerAddress, targetAddress, timeout } =
      options || {};

    return await axios.get(
      `${this.serverAddress}/api/v1/get_signed_wrapped_open_quote`,
      {
        params: {
          version: version,
          chainId: chainId.toString(),
          onlyActive: onlyActive?.toString(),
          start: start?.toString(),
          end: end?.toString(),
          issuerAddress: issuerAddress,
          targetAddress: targetAddress,
        },
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async sendSignedFillOpenQuote(
    quote: SignedFillOpenQuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedFillOpenQuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_signed_fill_open_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getSignedFillOpenQuotes(
    version: string,
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedFillOpenQuoteResponse[]> | undefined> {
    const {
      onlyActive,
      start,
      end,
      issuerAddress,
      targetAddress,
      timeout = 3000,
    } = options || {};

    return await axios.get(
      `${this.serverAddress}/api/v1/get_signed_fill_open_quote`,
      {
        params: {
          version: version,
          chainId: chainId.toString(),
          onlyActive: onlyActive?.toString(),
          start: start?.toString(),
          end: end?.toString(),
          issuerAddress: issuerAddress,
          targetAddress: targetAddress,
        },
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async sendSignedCancelOpenQuote(
    quote: SignedCancelOpenQuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCancelOpenQuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_signed_cancel_open_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getSignedCancelOpenQuotes(
    version: string,
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCancelOpenQuoteResponse[]> | undefined> {
    const {
      onlyActive,
      start,
      end,
      issuerAddress,
      targetAddress,
      timeout = 3000,
    } = options || {};

    return await axios.get(
      `${this.serverAddress}/api/v1/get_signed_cancel_open_quote`,
      {
        params: {
          version: version,
          chainId: chainId.toString(),
          onlyActive: onlyActive?.toString(),
          start: start?.toString(),
          end: end?.toString(),
          issuerAddress: issuerAddress,
          targetAddress: targetAddress,
        },
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async sendSignedCloseQuote(
    quote: SignedCloseQuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCloseQuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_signed_close_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getSignedCloseQuotes(
    version: string,
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCloseQuoteResponse[]> | undefined> {
    const {
      onlyActive,
      start,
      end,
      issuerAddress,
      targetAddress,
      timeout = 3000,
    } = options || {};

    return await axios.get(
      `${this.serverAddress}/api/v1/get_signed_close_quote`,
      {
        params: {
          version: version,
          chainId: chainId.toString(),
          onlyActive: onlyActive?.toString(),
          start: start?.toString(),
          end: end?.toString(),
          issuerAddress: issuerAddress,
          targetAddress: targetAddress,
        },
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async sendSignedCancelCloseQuote(
    quote: SignedCancelCloseQuoteRequest,
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCancelCloseQuoteResponse> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(
      `${this.serverAddress}/api/v1/submit_signed_cancel_close_quote`,
      quote,
      {
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getSignedCancelCloseQuotes(
    version: string,
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<signedCancelCloseQuoteResponse[]> | undefined> {
    const {
      onlyActive,
      start,
      end,
      issuerAddress,
      targetAddress,
      timeout = 3000,
    } = options || {};

    return await axios.get(
      `${this.serverAddress}/api/v1/get_signed_cancel_close_quote`,
      {
        params: {
          version: version,
          chainId: chainId.toString(),
          onlyActive: onlyActive?.toString(),
          start: start?.toString(),
          end: end?.toString(),
          issuerAddress: issuerAddress,
          targetAddress: targetAddress,
        },
        headers: {
          Authorization: token,
        },
        timeout: timeout,
      },
    );
  }

  async getPositions(
    chainId: number,
    token: string,
    options?: {
      onlyActive?: boolean;
      start?: number;
      end?: number;
      issuerAddress?: string;
      targetAddress?: string;
      address?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<PositionResponse[]> | undefined> {
    const {
      onlyActive,
      start,
      end,
      issuerAddress,
      targetAddress,
      address,
      timeout = 3000,
    } = options || {};

    return await axios.get(`${this.serverAddress}/api/v1/get_positions`, {
      params: {
        chainId: chainId.toString(),
        onlyActive: onlyActive?.toString(),
        start: start?.toString(),
        end: end?.toString(),
        issuerAddress: issuerAddress,
        targetAddress: targetAddress,
        address: address,
      },
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async getPionSignature(
    requestAsset1: string,
    requestAsset2: string,
    requestPairBid: string,
    requestPairAsk: string,
    requestConfidence: string,
    requestSignTime: string,
    token: string,
    options?: {
      requestPrecision?: string;
      requestConfPrecision?: string;
      maxTimestampDiff?: string;
      timeout?: number;
    },
  ): Promise<AxiosResponse<PionResult> | undefined> {
    const {
      requestPrecision,
      requestConfPrecision,
      maxTimestampDiff,
      timeout = 10000,
    } = options || {};

    let apiUrl = `${this.serverAddress}/api/v1/get_pion_signature?requestAsset1=${requestAsset1}&requestAsset2=${requestAsset2}&requestPairBid=${requestPairBid}&requestPairAsk=${requestPairAsk}&requestConfidence=${requestConfidence}&requestSignTime=${requestSignTime}`;

    if (requestPrecision) {
      apiUrl += `&requestPrecision=${requestPrecision}`;
    }
    if (requestConfPrecision) {
      apiUrl += `&requestConfPrecision=${requestConfPrecision}`;
    }
    if (maxTimestampDiff) {
      apiUrl += `&maxTimestampDiff=${maxTimestampDiff}`;
    }

    return await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async logout(
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<{ message: string }> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(`${this.serverAddress}/api/v1/logout`, null, {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }

  async getPayload(
    address: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<{ uuid: string; message: string }> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.get(`${this.serverAddress}/api/v1/payload`, {
      params: { address: address },
      timeout: timeout,
    });
  }

  async login(
    uuid: string,
    signedMessage: string,
  ): Promise<AxiosResponse<{ token: string }> | undefined> {
    return await axios.post(`${this.serverAddress}/api/v1/login`, {
      uuid: uuid,
      signedMessage: signedMessage,
    });
  }

  async getPayloadAndLogin(wallet: WalletClient): Promise<string | null> {
    if (!wallet.account) {
      return null;
    }
    const address = wallet.account.address;
    const payloadResponse = await this.getPayload(address);

    if (
      !payloadResponse ||
      payloadResponse.status != 200 ||
      !payloadResponse.data.uuid ||
      !payloadResponse.data.message
    ) {
      return null;
    }

    const { uuid, message } = payloadResponse.data;

    const signedMessage = await wallet.signMessage({
      account: wallet.account,
      message: message,
    });

    const loginResponse = await this.login(uuid, signedMessage);

    if (
      !loginResponse ||
      loginResponse.status != 200 ||
      !loginResponse.data.token
    ) {
      return null;
    }

    const token = loginResponse.data.token;

    return token;
  }

  async extendToken(
    token: string,
    options?: {
      timeout?: number;
    },
  ): Promise<AxiosResponse<{ message: string }> | undefined> {
    const { timeout = 3000 } = options || {};

    return await axios.post(`${this.serverAddress}/api/v1/extend_token`, {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    });
  }
}
