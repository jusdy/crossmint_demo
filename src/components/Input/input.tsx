interface InputTypes {
    className?: string;
    name?: string;
    onBlur?: () => void;
    onChange?: () => void;
    value?: any;
    type?: string;
}

const Input = ({
    className,
    name,
    onBlur,
    onChange,
    value,
    type
}: InputTypes) => {
    return (
        <input
            className={`${className} ml-2 pl-1 text-[black] w-full`}
            name={name}
            type={type ? type : "text"}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
        >
        </input>
    )
}

export default Input;