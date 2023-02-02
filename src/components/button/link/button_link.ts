import { BaseButtonProps, LinkComponent } from "@types";

export interface LinkButtonProps extends BaseButtonProps {
    type?: "link";
    Link?: LinkComponent;
    onHoverAnimation?: "none" | "simple" | "line";
    onClickAnimation?: "none" | "simple";
    to?: string;
}
