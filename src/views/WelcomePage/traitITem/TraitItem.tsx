import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core"
import { trait_shop_address } from "constant/address";
import { Contract } from '@ethersproject/contracts';
import TraitShopABI from 'abi/TraitShop.json';
import Button from "components/button/Button";

const TraitItem = ({
    item
}: any) => {
    const { library } = useWeb3React();
    const onBuyETH = () => {
        const TraitShopContract = new Contract(
            trait_shop_address,
            TraitShopABI,
            library
        );

    }
    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={item?.uri}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#3ea7ff]">Fee: {item?.commission}%</p>
                <p className="text-[#e16d2d]">#{item?.name}</p>
            </div>

            <Button onClick={onBuyETH} className="w-full text-white text-lg h-8 mb-2">Buy with ETH</Button>
            <Button className="w-full text-white text-lg h-8">Buy with METH</Button>
        </div>
    )
}

export default TraitItem;