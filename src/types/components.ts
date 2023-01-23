import { ReactNode } from "react";

export type ComponentClassName = React.ComponentProps<"div">["className"];
export type ComponentDisplayOptions = "grid" | "list";
export type ComponentSizes = "sm" | "md" | "lg";
export type ComponentTypes = "primary" | "secondary" | "wild";
export type ComponentStyle = React.CSSProperties;

export interface ComponentProps {
    type?: ComponentTypes;
    size?: ComponentSizes;
    className?: ComponentClassName;
    style?: React.CSSProperties;
}

export interface ParentProps extends ComponentProps {
    children?: ReactNode | ReactNode[];
}
