import { useWeb3React } from "@web3-react/core"
import Button from "components/button/Button";
const TraitItem = ({
    item
}: any) => {
    const { account } = useWeb3React();
    const onBuyWithETH = async () => {

        const signBody = {
            type: "buyTraitWithETH",
            sponsorAddress: item?.sponsor,
            commissionPercentage: item?.commission,
            quantity: item?.maxQuantity,
            price: item?.price,
            traitId: item?.tokenId,
            signerAddress: account,
        }
        const data = await fetch(`http://54.67.4.219:9000/trait/sign`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signBody)
        })

    }
    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={"https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb24lMjBtYXJrc3xlbnwwfHwwfHw%3D&w=1000&q=80"}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#3ea7ff]">Fee: {item?.commission}%</p>
                <p className="text-[#e16d2d]">{item?.price} ETH</p>
            </div>

            <Button onClick={onBuyWithETH} className="w-full text-white text-lg h-8 mb-2">Buy with ETH</Button>
            <Button className="w-full text-white text-lg h-8">Buy with METH</Button>
        </div>
    )
}

export default TraitItem;