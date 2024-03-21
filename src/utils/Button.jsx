import { cn } from "tailwind-cn";

const Button = ({children, className}) => {
    return (
        <button className={cn("text-white font-bold", className)}>
            {children}
        </button>
    );
};

export default Button;