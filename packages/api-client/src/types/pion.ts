export interface Signature {
  owner: string;
  ownerPubKey: {
    x: string;
    yParity: string;
  };
  signature: string;
}

export interface SignParams {
  name: string;
  type: string;
  value: string;
}

export interface Result {
  asset1: string;
  asset2: string;
  requestPairBid: string;
  requestPairAsk: string;
  pairBid: string;
  pairAsk: string;
  confidence: string;
  requestConfidence: string;
  requestSignTime: string;
  oldestTimestamp: string;
}

export interface Data {
  uid: string;
  params: {
    asset1: string;
    asset2: string;
    requestPairBid: string;
    requestPairAsk: string;
    requestConfidence: string;
    requestSignTime: string;
  };
  timestamp: number;
  result: Result;
  resultHash: string;
  signParams: SignParams[];
  init: {
    nonceAddress: string;
  };
}

export interface PionResult {
  success: boolean;
  result: {
    confirmed: boolean;
    reqId: string;
    app: string;
    appId: string;
    method: string;
    deploymentSeed: string;
    nSign: number;
    gwAddress: string;
    data: Data;
    startedAt: number;
    confirmedAt: number;
    signatures: Signature[];
  };
}
