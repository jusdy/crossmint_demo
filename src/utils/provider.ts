import { JsonRpcProvider } from "@ethersproject/providers";

export const getDefaultRPCProvider = (): JsonRpcProvider => {
  const appChainId = 5;
  const provider = new JsonRpcProvider("https://goerli.infura.io/v3/9156cc61e0b54f2e8063f8fd96da5d76");
  return provider;
};