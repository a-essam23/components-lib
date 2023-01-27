import { BaseButtonProps } from "@types";

export interface BlockButtonProps extends BaseButtonProps {
    onHoverAnimation?: "jump" | "beat" | "wiggle";
    onClickAnimation?: "none" | "simple";
}
