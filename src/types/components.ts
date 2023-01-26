import { ReactNode } from "react";

export type ComponentClassName = React.ComponentProps<"div">["className"];
export type ComponentDisplayOptions = "grid" | "list";
export type ComponentSizes = "sm" | "md" | "lg";
export type ComponentVariants = "primary" | "secondary" | "wild";
export type ComponentStyle = React.CSSProperties;

export interface ComponentProps {
    variant?: ComponentVariants;
    size?: ComponentSizes;
    className?: ComponentClassName;
    style?: React.CSSProperties;
}

export interface ParentProps extends ComponentProps {
    children?: ReactNode | ReactNode[];
}

export interface BaseButtonProps extends ParentProps {
    onClick?: () => any;
    hrefType?: "button" | "submit" | "reset";
}
