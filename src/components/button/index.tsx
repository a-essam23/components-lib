import { ComponentSizes, ComponentTypes } from "@types";
import ButtonProps from "./button";

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
        const types = {
            primary: `bg-primary-light hover:bg-primary-light border-primary hover:border-primary-light text-primary-text`,
            secondary: `bg-secondary-light hover:bg-secondary-light border-secondary hover:border-secondary-light text-secondary-text`,
        };
        const sizes = {
            sm: "text-sm px-2 py-1",
            md: "text-normal px-3 py-2",
            lg: "text-h4 px-4 py-3",
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
        return `h-full items-center flex w-max h-max transition-all border-2 ${sizeClass} ${colorClass} ${animationClass}`;
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
