import { ReactNode } from "react";

export type ComponentClassName = React.ComponentProps<"div">["className"];
export type ComponentSizes = "sm" | "md" | "lg";
export type ComponentVariants = "primary" | "secondary" | "wild";
export type ComponentStyle = React.CSSProperties;

export interface ComponentProps {
    variant?: ComponentVariants;
    size?: ComponentSizes;
    className?: ComponentClassName;
    style?: ComponentStyle;
}

export interface ParentProps extends ComponentProps {
    children?: ReactNode | ReactNode[];
}

export interface BaseButtonProps extends ParentProps {
    type?: "block" | "link";
    onClick?(): any;
    hrefType?: "button" | "submit" | "reset";
}
