import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWeb3React } from "@web3-react/core";

const SaleItem = ({item}: any) => {
    const { account } = useWeb3React();
    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={item?.imageUri}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#e16d2d]">{item?.name}</p>
            </div>
            <CrossmintPayButton
                className="!bg-[#572f03]"
                clientId="903868b2-9ace-42df-98bc-ffe102d6b9b8"
                mintConfig={{"type":"erc-721","totalPrice":"0.00001","item":[item?.collectionAddress, item.tokenId],"quantity":1}}
                environment="staging"
                mintTo={account ? account : ""}
            />
        </div>
    )
}

export default SaleItem;