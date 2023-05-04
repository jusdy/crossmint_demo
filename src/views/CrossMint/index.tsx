import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWeb3React } from "@web3-react/core";

const CrossMint = () => {
    const { account, active } = useWeb3React();
    const tokenId = 9017;
    const mintPrice = "0.0001";

    return (
        <>
            {active &&
                <CrossmintPayButton
                className="mt-10 w-[300px]"
                clientId="903868b2-9ace-42df-98bc-ffe102d6b9b8"
                mintConfig={{"type":"erc-721","totalPrice": mintPrice,"_tokenIds": Array(1).fill(tokenId)}}
                environment="staging"
                mintTo={account || ""}
            />}
        </>
    )
}

export default CrossMint;