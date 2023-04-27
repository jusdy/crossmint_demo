const TraitItem = ({
    item
}: any) => {
    return (
        <div className="w-[256px]">
            <img className="w-fit rounded-xl" alt="" src={item?.uri}/>

            <div className="flex justify-between text-lg font-bold mt-2">
                <p className="text-white">#{item?.tokenId}</p>
                <p className="text-[#e16d2d]">#{item?.name}</p>
            </div>
        </div>
    )
}

export default TraitItem;