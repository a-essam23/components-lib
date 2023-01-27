import { BaseButtonProps } from "@types";
import { BlockButtonProps } from "./block/button_block";
import { LinkButtonProps } from "./link/button_link";

type conditionalProps =
    | ({
          type?: "link";
      } & LinkButtonProps)
    | ({
          type?: "block";
      } & BlockButtonProps)
    | BlockButtonProps;

export type ButtonProps = BaseButtonProps & conditionalProps;
