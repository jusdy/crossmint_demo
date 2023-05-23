import Button from "components/button/Button";
import { useContract } from "hooks/useContract";
import ApesABI from "abi/BapApes.json"
import BullsABI from "abi/Bulls.json"
import { collections, minter } from "constant/address";

const NFTItem = ({item, updateItem}: any) => {
    const ApesContract: any = useContract(ApesABI, collections.apes);
    const BullsContract: any = useContract(BullsABI, collections.bulls);
    const onPutSale = async () => {
        if (item?.collectionAddress === collections.apes) {
            const tx = await ApesContract.approve(minter, item?.tokenId);
            await tx.wait(1);
            await updateItem(item.tokenId);
            await fetch("http://135.181.11.13:5000/demo/remove", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({item: item})
            });

        }
        else if (item?.collectionAddress === collections.bulls) {
            const tx = await BullsContract.approve(minter, item?.tokenId);
            await tx.wait(1);
        }
    }

    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={item?.imageUri}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#e16d2d]">{item?.name}</p>
            </div>
            <Button onClick={onPutSale} className="w-full text-white text-lg h-8 mb-2">Put on Sale</Button>
        </div>
    )
}

export default NFTItem;