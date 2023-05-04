import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";

export const useContract = (ABI: any, address: string) => {
    const { library, account } = useWeb3React();
    return useMemo(() => {
      if (!address || !library) return null;
      return new Contract(address, ABI, library.getSigner(account));
    }, [ABI, address, library]);
};