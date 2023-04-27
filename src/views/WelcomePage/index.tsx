import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const WelcomePage = () => {
    const [ isOpenCreateTrait, setCreateTraitOpen ] = useState<boolean>(false);
    const [ isLoadingCreate, setLoadingCreate ] = useState<boolean>(false);

    const onCreateNewTrait = () => {
        setLoadingCreate(true);
    }
    return (
        <div className="grow pt-[200px]">
            <button className="transition-all text-white bg-[#0081f9] p-2 font-bold text-sm hover:text-[black] hover:bg-[#1f9bde] duration-300 sm:text-2xl"
            onClick={() => setCreateTraitOpen(true)}
            >
                Create a ticket
            </button>

            <ConfirmModal isModal={isOpenCreateTrait} closeModal={() => setCreateTraitOpen(false)} isLoading={isLoadingCreate} onCreateNewTrait={onCreateNewTrait}/>
        </div>
    )
}//0xeb114626318aC5e7827c879dc2F9C5a549FF4bb9

export default WelcomePage;