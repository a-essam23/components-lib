import { BaseButtonProps } from "@types";

export interface BlockButtonProps extends BaseButtonProps {
    // type?: "block";
    onHoverAnimation?: "none" | "simple" | "jump" | "beat" | "wiggle";
    onClickAnimation?: "none" | "simple";
}
