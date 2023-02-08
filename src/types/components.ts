import React, { ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { UseMeasureRef } from "react-use/lib/useMeasure";

export type ComponentClassName = React.ComponentProps<"div">["className"];
export type ComponentSizes = "sm" | "md" | "lg";
export type ComponentVariants = "primary" | "secondary" | "wild";
export type ComponentStyle = React.CSSProperties;
export type LinkComponent = React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
>;
export type ComponentRef =
    | React.RefObject<HTMLElement>
    | UseMeasureRef<HTMLElement>;

export type ComponentChildren = ReactNode | ReactNode[];

export interface ComponentProps {
    id?: string;
    variant?: ComponentVariants;
    size?: ComponentSizes;
    className?: ComponentClassName;
    style?: ComponentStyle;
    Ref?: ComponentRef;
}

export interface ParentProps extends ComponentProps {
    children?: ComponentChildren;
}

export interface BaseButtonProps extends ParentProps {
    type?: "block" | "link";
    onClick?(): any;
    hrefType?: "button" | "submit" | "reset";
}
