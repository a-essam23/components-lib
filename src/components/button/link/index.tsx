import styles from "./button_link.module.scss";
import { ComponentSizes, ComponentVariants } from "@types";
import { Link as RLink } from "react-router-dom";
import { FC } from "react";
import { LinkButtonProps } from "./button_link";

const LinkButton: FC<LinkButtonProps> = ({
    children,
    className = "",
    onClick,
    variant = "primary",
    hrefType = "button",
    size = "md",
    onHoverAnimation = "simple",
    onClickAnimation = "simple",
    Link = RLink,
    to,
    style,
}): JSX.Element => {
    const sizeClass = () => {
        const sizes = {
            sm: "text-normal",
            md: "text-h5",
            lg: "text-h4",
        };
        return styles[`btn--${size as ComponentSizes}`] || styles["btn--md"];
    };

    const variantClass = () => {
        const variants = {
            primary: "text-root before:bg-root",
            secondary: "text-control before:bg-control",
            wild: "text-wild before:bg-wild",
        };
        return (
            styles[`btn--${variant as ComponentVariants}`] ||
            styles["btn--primary"]
        );
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
    return to ? (
        <Link
            to={to}
            style={style}
            className={`w-max h-max transition-all rounded-primary
            ${sizeClass()} ${variantClass()} ${onHoverAnimationClass()} ${onClickAnimationClass()} ${className}`}
        >
            {children}
        </Link>
    ) : (
        <button
            type={hrefType}
            onClick={onClick}
            style={style}
            className={`w-max h-max transition-all rounded-primary
            ${sizeClass()} ${variantClass()} ${onHoverAnimationClass()} ${onClickAnimationClass()} ${className}`}
        >
            {children}
        </button>
    );
};

export default LinkButton;
