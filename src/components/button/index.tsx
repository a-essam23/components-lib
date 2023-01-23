import { ComponentSizes, ComponentTypes } from "@types";
import { ButtonProps } from "./button";

const Button = ({
    children,
    className = "",
    onClick,
    type = "primary",
    hrefType = "button",
    size = "md",
    animation,
}: ButtonProps): JSX.Element => {
    const buttonClass = (): string => {
        const base = `items-center border text-center w-max h-max transition-all rounded-primary`;
        const types = {
            primary:
                "bg-root border-root text-control hover:bg-light active:bg-dark",
            secondary:
                "bg-control border-root text-root hover:bg-light hover:text-control active:bg-root",
            wild: "bg-wild border-root text-control hover:brightness-110 active:brightness-100",
        };
        const sizes = {
            sm: "text-normal px-1.5 py-1",
            md: "text-h5 px-6 py-1.5",
            lg: "text-h4 px-12 py-3",
        };
        const animations = {
            jump: "hover:shadow-lg hover:-translate-y-1 hover:scale-105",
            wiggle: "hover:shadow-lg hover:animate-wiggle hover:scale-125",
            beat: "hover:shadow-lg hover:animate-beat hover:scale-105",
        };
        const colorClass = types[type as ComponentTypes] || types["primary"];
        const sizeClass = sizes[size as ComponentSizes] || sizes["md"];
        const animationClass =
            animations[animation as keyof ButtonProps["animation"]] ?? "";
        return `${base} ${sizeClass} ${colorClass} ${animationClass}`;
    };
    return (
        <button
            type={hrefType}
            onClick={onClick}
            className={`${buttonClass()} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
