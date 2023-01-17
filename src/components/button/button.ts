import { ParentProps } from "@types";
import { HTMLAttributes } from "react";

export default interface ButtonProps extends ParentProps {
    // ,HTMLAttributes<HTMLButtonElement>
    onClick?: () => any;
    hrefType?: "button" | "submit" | "reset";
    animation?: "jump" | "beat" | "wiggle";
}
