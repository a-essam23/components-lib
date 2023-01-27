import { BaseButtonProps } from "@types";

export interface LinkButtonProps extends BaseButtonProps {
    linkComponent?: JSX.Element;
    onHoverAnimation?: "line";
    onClickAnimation?: "none" | "simple";
}
