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
            <img className="w-fit rounded-xl" alt="" src={"https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb24lMjBtYXJrc3xlbnwwfHwwfHw%3D&w=1000&q=80"}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#3ea7ff]">Fee: {item?.commission}%</p>
                <p className="text-[#e16d2d]">{item?.price} ETH</p>
            </div>

            <Button onClick={onBuyETH} className="w-full text-white text-lg h-8 mb-2">Buy with ETH</Button>
            <Button className="w-full text-white text-lg h-8">Buy with METH</Button>
        </div>
    )
}

export default TraitItem;