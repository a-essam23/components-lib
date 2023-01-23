import { ParentProps } from "@types";

export interface ButtonProps extends ParentProps {
    onClick?: () => any;
    hrefType?: "button" | "submit" | "reset";
    animation?: "jump" | "beat" | "wiggle";
}
