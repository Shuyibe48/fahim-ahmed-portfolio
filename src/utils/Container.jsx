import { cn } from "tailwind-cn";

const Container = ({children, className}) => {
    return (
        <div className={cn("h-full w-full max-w-[1220px] px-[20px] mx-auto py-[40px]", className)}>
            {children}
        </div>
    );
};

export default Container;