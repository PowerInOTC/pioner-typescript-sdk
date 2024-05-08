export interface PionDataSignature {
  owner: string;
  ownerPubKey: {
    x: string;
    yParity: string;
  };
  signature: string;
}

export interface PionDataSignParams {
  name: string;
  type: string;
  value: string;
}

export interface PionDataResult {
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

export interface PionData {
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
  result: PionDataResult;
  resultHash: string;
  signParams: PionDataSignParams[];
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
    data: PionData;
    startedAt: number;
    confirmedAt: number;
    signatures: PionDataSignature[];
  };
}
