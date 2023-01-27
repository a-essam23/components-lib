import { BaseButtonProps } from "@types";

export interface LinkButtonProps extends BaseButtonProps {
    // type?: "link";
    linkComponent?: JSX.Element;
    onHoverAnimation?: "none" | "simple" | "line";
    onClickAnimation?: "none" | "simple";
}
