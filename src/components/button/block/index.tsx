import { ComponentSizes, ComponentVariants } from "@types";
import { BlockButtonProps } from "./button.block";

const BlockButton = ({
    children,
    className = "",
    onClick,
    variant = "primary",
    hrefType = "button",
    size = "md",
    onHoverAnimation = "simple",
    onClickAnimation = "simple",
    style,
}: BlockButtonProps): JSX.Element => {
    const sizeClass = () => {
        const sizes = {
            sm: "text-normal px-1.5 py-1",
            md: "text-h5 px-6 py-1.5",
            lg: "text-h4 px-12 py-3",
        };
        return sizes[size as ComponentSizes] || sizes["md"];
    };

    const variantClass = () => {
        const variants = {
            primary: "bg-root border-root text-control ",
            secondary: "bg-control border-root text-root ",
            wild: "bg-wild border-root text-control ",
        };
        return variants[variant as ComponentVariants] || variants["primary"];
    };

    const onHoverAnimationClass = () => {
        const onHoverAnimations = {
            none: "",
            simple: "hover:brightness-110 ",
            jump: "hover:shadow-md hover:-translate-y-1 hover:scale-105",
            wiggle: "hover:shadow-md hover:animate-wiggle hover:scale-125",
            beat: "hover:shadow-md hover:animate-beat hover:scale-105",
        };
        return (
            onHoverAnimations[
                onHoverAnimation as keyof BlockButtonProps["onHoverAnimation"]
            ] || onHoverAnimations["none"]
        );
    };

    const onClickAnimationClass = () => {
        const onClickAnimations = {
            none: "",
            simple: "active:contrast-75",
        };
        return (
            onClickAnimations[
                onClickAnimation as keyof BlockButtonProps["onHoverAnimation"]
            ] || onClickAnimations["none"]
        );
    };
    return (
        <button
            style={style}
            type={hrefType}
            onClick={onClick}
            className={`items-center text-center w-max h-max transition-all rounded-primary border-2
            ${sizeClass()} ${variantClass()} ${onHoverAnimationClass()} ${onClickAnimationClass()} ${className}`}
        >
            {children}
        </button>
    );
};

export default BlockButton;
