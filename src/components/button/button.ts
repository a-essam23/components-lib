import { BaseButtonProps, LinkComponent } from "@types";
import { BlockButtonProps } from "./block/button_block";
import { LinkButtonProps } from "./link/button_link";

type conditionalProps = LinkButtonProps | BlockButtonProps;

export type ButtonProps = BaseButtonProps & {
    Link?: LinkComponent;
    to?: string;
} & conditionalProps;
