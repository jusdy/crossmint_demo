import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import SaleItem from "./saleItem";

const SaleItems = () => {
    const [saleItems, setSaleItems] = useState<any>([]);
    const { active } = useWeb3React();
    useEffect(() => {
        ;(async () => {
            const response = await fetch(`http://135.181.11.13:5000/demo/salelist`)
            const data = await response.json();
            console.log(data)
            setSaleItems(data.data);
        })();
    },[])

    return (
        <div className="flex flex-wrap gap-10 grow p-[50px] bg-[#1e1e24]">
            {active && 
                saleItems?.map((item: any, key: number) => (
                    <SaleItem item={item} key={key}/>
                ))
            }
        </div>
    )
}

export default SaleItems;