interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button = ({
    className,
    onClick,
    children
}: ButtonProps) => {
    return (
        <button className={`${className} border border-[#AAAAAA99] bg-[#232329] rounded-lg transition hover:bg-[#ffffff00]`}>
            {children} 
        </button>
    )
}

export default Button;