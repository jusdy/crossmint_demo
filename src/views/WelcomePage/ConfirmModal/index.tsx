import Modal from 'react-modal';
import { ThreeDots } from  'react-loader-spinner'
import Input from 'components/Input/input';
import { useFormInputValidation } from "react-form-input-validation";

interface ModalProps {
    isModal: boolean;
    isLoading: boolean;
    // isConfirm: boolean;
    closeModal: () => void;
    onCreateNewTrait: (fields: any) => void;
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('body');
const ConfirmModal = ({
    isModal=false,
    isLoading=false,
    // isConfirm=false,
    onCreateNewTrait,
    closeModal,
}: ModalProps) => {
    const [fields, errors, form]: any = useFormInputValidation({
        name: "",
        uri: "",
        maxQuantity: 0,
        tokenId: 0,
        price: 0,
        sponsor: "",
        commission: 0,
        expiryDate: "",
      }, {
        name: "required",
        uri: "required",
        maxQuantity: "required|numeric",
        tokenId: "required|numeric",
        price: "required|numeric",
        sponsor: "required",
        commission: "required|numeric",
        expiryDate: "required",
    });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const isValid = await form.validate(e);
        if (isValid) {
            onCreateNewTrait(fields);
        }
    }

    return (
        <Modal
            isOpen={isModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            
        >
            <div className='flex flex-col p-5'>
                {/* <h1 className='text-xl text-white text-center'>{isLoading && !isConfirm ? 'Transferring NFT to your wallet' : !isLoading && !isConfirm ? 'Are you sure to mint?' : ''}</h1> */}
                <h1 className='text-xl text-white text-center'>{isLoading ? 'Please wait...' : ''}</h1>

                <div className='h-[70px]'>
                    {/* <div className={`w-full items-center justify-center gap-x-4 ${'flex'}`}>
                        <img className='w-[40px]' src='checkmark.svg'/>
                        <p className='text-white text-lg'>Transaction Confirmed</p>
                    </div> */}
                </div>

                <form
                    className='flex flex-col gap-2'
                    autoComplete="off"
                    onSubmit={onSubmit}
                >
                    <div className='flex'>
                        <label className='text-white w-[120px]'>name:</label>
                            <Input
                                name="name"
                                onBlur={form.handleBlurEvent}
                                onChange={form.handleChangeEvent}
                                value={fields.name}
                            />
                    </div>
                    <label className="error text-[red] ml-[60px]"> {errors.name ? errors.name : ""}</label>
                
                    <div className='flex'>
                        <label className='text-white w-[120px]'>uri:</label>
                        <Input
                            name="uri"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.uri}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.uri ? errors.uri : ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>Quantity:</label>
                        <Input
                            name="maxQuantity"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.maxQuantity}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.maxQuantity ? errors.maxQuantity: ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>tokenId:</label>
                        <Input
                            name="tokenId"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.tokenId}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.tokenId ? errors.tokenId: ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>price:</label>
                        <Input
                            name="price"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.price}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.price ? errors.price: ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>sponsor:</label>
                        <Input
                            name="sponsor"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.sponsor}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.sponsor ? errors.sponsor: ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>commission:</label>
                        <Input
                            name="commission"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.commission}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.commission ? errors.commission : ""}</label>

                    <div className='flex'>
                        <label className='text-white w-[120px]'>expiryDate:</label>
                        <Input
                            name="expiryDate"
                            type="date"
                            onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.expiryDate}
                        />
                    </div>
                    <label className="error text-[red] ml-[60px]">{errors.expiryDate ? errors.expiryDate: ""}</label>

                    <div className='flex mt-6 px-[50px] h-[40px] justify-center text-white'>
                        <div className={`items-center justify-center ${isLoading ? 'flex' : 'hidden'}`}>
                            <ThreeDots
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                visible={true}
                            />
                        </div>
                        <div className={`w-full items-center gap-5 ${"justify-center"}  ${isLoading ? 'hidden' : 'flex'}`}>
                            <button type="submit" className={`w-[80px] border-white border-[1px] text-xl hover:bg-[#1f9bde] transition-all duration-300 hover:border-[#1f9bde]`}>Create</button>
                            <button onClick={closeModal} className='w-[80px] border-white border-[1px] text-xl hover:bg-[#f9b500] transition-all duration-300 hover:border-[#f9b500]'>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
    </Modal>
    );
}

export default ConfirmModal;