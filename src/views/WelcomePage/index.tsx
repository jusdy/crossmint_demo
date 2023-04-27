import { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import ConfirmModal from './ConfirmModal';
import TraitItem from './traitITem/TraitItem';

const WelcomePage = () => {
    const { active, account, activate, deactivate, chainId } = useWeb3React()
    const [ isOpenCreateTrait, setCreateTraitOpen ] = useState<boolean>(false);
    const [ isLoadingCreate, setLoadingCreate ] = useState<boolean>(false);
    const [ salesItems, setSalesItems ] = useState<any>();

    const onCreateNewTrait = (fields: any) => {
        setLoadingCreate(true);
    }

    useEffect(() => {
        if(active) {
            ;(async () => {
                const response = await fetch(`http://54.67.4.219:9000/trait/all?walletAddress=${account}`)
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
                Create a Trait
            </button>

            <div className='flex gap-x-10 mt-10'>
            {salesItems?.map((item: any, key: number) => (
                <TraitItem item={item} key={key}/>
            ))}
            </div>

            <ConfirmModal isModal={isOpenCreateTrait} closeModal={() => setCreateTraitOpen(false)} isLoading={isLoadingCreate} onCreateNewTrait={onCreateNewTrait}/>

        </div>
    )
}//0xeb114626318aC5e7827c879dc2F9C5a549FF4bb9

export default WelcomePage;