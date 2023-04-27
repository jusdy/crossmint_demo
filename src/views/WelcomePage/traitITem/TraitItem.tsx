import Button from "components/button/Button";

const TraitItem = ({
    item
}: any) => {
    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={item?.uri}/>

            <div className="flex justify-between text-lg font-bold my-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#3ea7ff]">Fee: {item?.commission}%</p>
                <p className="text-[#e16d2d]">#{item?.name}</p>
            </div>

            <Button className="w-full text-white text-lg h-8 mb-2">Buy with ETH</Button>
            <Button className="w-full text-white text-lg h-8">Buy with METH</Button>
        </div>
    )
}

export default TraitItem;