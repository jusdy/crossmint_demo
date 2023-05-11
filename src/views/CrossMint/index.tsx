import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import NFTItem from "./item";

const CrossMint = () => {
    const { active } = useWeb3React();
    const [myItems, setMyItems] = useState<any>([]);

    useEffect(() => {
        ;(async () => {
            const response = await fetch(`http://localhost:5000/demo/list`)
            const data = await response.json();
            console.log(data)
            setMyItems(data.data);
        })();
    },[])

    const updateMyItems = (tokenId: number) => {
        setMyItems(myItems.filter((item: any) => item.tokenId !== tokenId))
    }

    return (
        <div className="flex flex-wrap gap-10 grow p-[50px] bg-[#1e1e24]">
            {active &&
                myItems?.map((item: any, key: number) => (
                    <NFTItem item={item} key={key} updateItem={(tokenId: number) => updateMyItems(tokenId)}/>
                ))
            }
        </div>
    )
}

export default CrossMint;