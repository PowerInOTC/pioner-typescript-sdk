import ethers from 'ethers';
import axios, { AxiosResponse } from 'axios';
import { config } from './config';
import { QuoteRequest, RfqRequest } from './types/requests';

const protocol: string = config.https ? 'https' : 'http';
const serverAddress = config.serverAddress;
const serverPort = config.serverPort;

export async function getPrices(
  symbols: string[],
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  let url = `${protocol}://${serverAddress}:${serverPort}/api/v1/get_prices?`;
  url += symbols.map((symbol) => `ids[]=${symbol}`).join('&');

  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: timeout,
  });
}

export async function sendRfq(
  rfq: RfqRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_rfq`,
    rfq,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: timeout,
    },
  );
}

export async function getRfqs(
  token: string,
  start?: number,
  end?: number,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_rfqs`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { start: start, end: end },
      timeout: timeout,
    },
  );
}

export async function getQuotes(
  rfqId: string,
  token: string,
  start?: number,
  end?: number,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  return await axios.get(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/get_quotes`,
    {
      params: {
        rfqId: rfqId,
        start: start,
        end: end,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: timeout,
    },
  );
}

export async function sendQuote(
  quote: QuoteRequest,
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/submit_quote`,
    quote,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: timeout,
    },
  );
}

export async function logout(
  token: string,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/logout`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: timeout,
    },
  );
}

export async function getPayload(
  address: string,
  timeout: number = 3000,
): Promise<AxiosResponse | undefined> {
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
): Promise<AxiosResponse | undefined> {
  return await axios.post(
    `${protocol}://${serverAddress}:${serverPort}/api/v1/login`,
    { uuid: uuid, signedMessage: signedMessage },
  );
}

export async function getPayloadAndLogin(
  wallet: ethers.Wallet,
): Promise<string | null> {
  const address = wallet.address;
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

  const signedMessage = await wallet.signMessage(message);

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
