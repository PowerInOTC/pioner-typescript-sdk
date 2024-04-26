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

const protocol: string = config.https ? 'https' : 'http';
const serverAddress = config.serverAddress;
const serverPort = config.serverPort;

export async function getPrices(
  symbols: string[],
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<PricesResponse> | undefined> {
  let url = `${protocol}://${serverAddress}:${serverPort}/api/v1/get_prices`;
  url += '?ids=' + symbols.join(',');

  return await axios.get(url, {
    headers: {
      Authorization: token,
    },
    timeout: timeout,
  });
}

export async function sendRfq(
  rfq: RfqRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<RfqResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_rfq`,
    rfq,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getRfqs(
  id: string | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<RfqResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_rfqs`,
    {
      headers: {
        Authorization: token,
      },
      params: { id: id, start: start, end: end },
      timeout: timeout,
    },
  );
}

export async function sendQuote(
  quote: QuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<QuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getQuotes(
  rfqId: string,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<QuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_quotes`,
    {
      params: {
        rfqId: rfqId,
        start: start,
        end: end,
      },
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function sendSignedWrappedOpenQuote(
  quote: SignedWrappedOpenQuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedWrappedOpenQuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_signed_wrapped_open_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getSignedWrappedOpenQuotes(
  version: string,
  chainId: number,
  onlyActive: boolean | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  issuerAddress: string | undefined = undefined,
  targetAddress: string | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedWrappedOpenQuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_signed_wrapped_open_quote`,
    {
      params: {
        version: version,
        chainId: chainId,
        onlyActive: onlyActive,
        start: start,
        end: end,
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

export async function sendSignedFillOpenQuote(
  quote: SignedFillOpenQuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedFillOpenQuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_signed_fill_open_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getSignedFillOpenQuotes(
  version: string,
  chainId: number,
  onlyActive: boolean | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  issuerAddress: string | undefined = undefined,
  targetAddress: string | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedFillOpenQuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_signed_fill_open_quote`,
    {
      params: {
        version: version,
        chainId: chainId,
        onlyActive: onlyActive,
        start: start,
        end: end,
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

export async function sendSignedCancelOpenQuote(
  quote: SignedCancelOpenQuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCancelOpenQuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_signed_cancel_open_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getSignedCancelOpenQuotes(
  version: string,
  chainId: number,
  onlyActive: boolean | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  issuerAddress: string | undefined = undefined,
  targetAddress: string | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCancelOpenQuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_signed_cancel_open_quote`,
    {
      params: {
        version: version,
        chainId: chainId,
        onlyActive: onlyActive,
        start: start,
        end: end,
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

export async function sendSignedCloseQuote(
  quote: SignedCloseQuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCloseQuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_signed_close_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getSignedCloseQuotes(
  version: string,
  chainId: number,
  onlyActive: boolean | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  issuerAddress: string | undefined = undefined,
  targetAddress: string | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCloseQuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_signed_close_quote`,
    {
      params: {
        version: version,
        chainId: chainId,
        onlyActive: onlyActive,
        start: start,
        end: end,
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

export async function sendSignedCancelCloseQuote(
  quote: SignedCancelCloseQuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCancelCloseQuoteResponse> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_signed_cancel_close_quote`,
    quote,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getSignedCancelCloseQuotes(
  version: string,
  chainId: number,
  onlyActive: boolean | undefined = undefined,
  start: number | undefined = undefined,
  end: number | undefined = undefined,
  issuerAddress: string | undefined = undefined,
  targetAddress: string | undefined = undefined,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<signedCancelCloseQuoteResponse[]> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_signed_cancel_close_quote`,
    {
      params: {
        version: version,
        chainId: chainId,
        onlyActive: onlyActive,
        start: start,
        end: end,
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

export async function getPionSignature(
  requestAsset1: string,
  requestAsset2: string,
  requestPairBid: string,
  requestPairAsk: string,
  requestConfidence: string,
  requestSignTime: string,
  requestPrecision: string | undefined = undefined,
  requestConfPrecision: string | undefined = undefined,
  maxTimestampDiff: string | undefined = undefined,
  token: string,
  timeout: number = 10000,
): Promise<AxiosResponse<PionResult> | undefined> {
  let apiUrl = `${protocol}://${serverAddress}:${serverPort}/api/v1/get_pion_signature?requestAsset1=${requestAsset1}&requestAsset2=${requestAsset2}&requestPairBid=${requestPairBid}&requestPairAsk=${requestPairAsk}&requestConfidence=${requestConfidence}&requestSignTime=${requestSignTime}`;
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

export async function logout(
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse<{ message: string }> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/logout`,
    null,
    {
      headers: {
        Authorization: token,
      },
      timeout: timeout,
    },
  );
}

export async function getPayload(
  address: string,
  timeout: number = 3000,
): Promise<AxiosResponse<{ uuid: string; message: string }> | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/payload`,
    {
      params: { address: address },
      timeout: timeout,
    },
  );
}

export async function login(
  uuid: string,
  signedMessage: string,
): Promise<AxiosResponse<{ token: string }> | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/login`,
    { uuid: uuid, signedMessage: signedMessage },
  );
}

export async function getPayloadAndLogin(
  wallet: WalletClient,
): Promise<string | null> {
  if (!wallet.account) {
    return null;
  }
  const address = wallet.account.address;
  const payloadResponse = await getPayload(address);

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

  const loginResponse = await login(uuid, signedMessage);

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
