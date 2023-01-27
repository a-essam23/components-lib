import { ComponentSizes, ComponentVariants } from "@types";
import { LinkButtonProps } from "./button.link";

const LinkButton = ({
    children,
    className = "",
    onClick,
    variant = "primary",
    hrefType = "button",
    size = "md",
    onHoverAnimation = "simple",
    onClickAnimation = "simple",
}: LinkButtonProps): JSX.Element => {
    const sizeClass = () => {
        const sizes = {
            sm: "text-normal",
            md: "text-h5",
            lg: "text-h4",
        };
        return sizes[size as ComponentSizes] || sizes["md"];
    };

    const variantClass = () => {
        const variants = {
            primary: "text-root before:bg-root",
            secondary: "text-control before:bg-control",
            wild: "text-wild before:bg-wild",
        };
        return variants[variant as ComponentVariants] || variants["primary"];
    };

    const onHoverAnimationClass = () => {
        const onHoverAnimations = {
            none: "",
            simple: "hover:brightness-110 ",
            line: "relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100",
        };
        return (
            onHoverAnimations[
                onHoverAnimation as keyof LinkButtonProps["onHoverAnimation"]
            ] || onHoverAnimations["none"]
        );
    };

    const onClickAnimationClass = () => {
        const onClickAnimations = {
            none: "",
            simple: "active:contrast-25",
            // line: "relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition active:before:scale-100",
        };
        return (
            onClickAnimations[
                onClickAnimation as keyof LinkButtonProps["onHoverAnimation"]
            ] || onClickAnimations["none"]
        );
    };
    return (
        <button
            type={hrefType}
            onClick={onClick}
            className={`w-max h-max transition-all rounded-primary
            ${sizeClass()} ${variantClass()} ${onHoverAnimationClass()} ${onClickAnimationClass()} ${className}`}
        >
            {children}
        </button>
    );
};

export default LinkButton;
