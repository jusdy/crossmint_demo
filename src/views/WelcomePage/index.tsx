import { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import ConfirmModal from './ConfirmModal';
import TraitItem from './traitITem/TraitItem';
import { ToastContainer, toast } from "react-toastify";

const WelcomePage = () => {
    const { active, account, activate, deactivate, chainId } = useWeb3React()
    const [ isOpenCreateTrait, setCreateTraitOpen ] = useState<boolean>(false);
    const [ isLoadingCreate, setLoadingCreate ] = useState<boolean>(false);
    const [ salesItems, setSalesItems ] = useState<any>();

    const onCreateNewTrait = async (fields: any) => {
        fields.maxQuantity = Number(fields.maxQuantity);
        fields.price = Number(fields.price);
        fields.commission = Number(fields.commission);
        fields.tokenId = Number(fields.tokenId);
        setLoadingCreate(true);
        await fetch("http://54.67.4.219:9000/trait/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fields)
        }).then((res) => {
            setLoadingCreate(false);
            toast.success("Successfully put the trait on sales list", {
                autoClose: 5000,
            });
        }).catch((err) => {
            toast.error("Something went wrong", {
                autoClose: 5000,
            });
            setLoadingCreate(false);
        })
    }

    useEffect(() => {
        if(active) {
            ;(async () => {
                const response = await fetch(`http://54.67.4.219:9000/trait/list?walletAddress=${account}`)
                const data = await response.json();
                setSalesItems(data);
            })();
        }

    },[account, chainId])
    return (
        <div className="grow p-[50px] bg-[#1e1e24]">
            <button className="transition-all text-white bg-[#0081f9] p-2 font-bold text-sm hover:text-[black] hover:bg-[#1f9bde] duration-300 sm:text-2xl"
            onClick={() => setCreateTraitOpen(true)}
            >
                Put on Sales List
            </button>

            <div className='flex flex-wrap gap-10 mt-10'>
            {salesItems?.map((item: any, key: number) => (
                <TraitItem item={item} key={key}/>
            ))}
            </div>

            <ConfirmModal isModal={isOpenCreateTrait} closeModal={() => setCreateTraitOpen(false)} isLoading={isLoadingCreate} onCreateNewTrait={onCreateNewTrait}/>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />
        </div>
    )
}//0xeb114626318aC5e7827c879dc2F9C5a549FF4bb9

export default WelcomePage;