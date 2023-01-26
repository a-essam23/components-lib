import { BaseButtonProps } from "@types";
import { BlockButtonProps } from "./block/button_block";
import { LinkButtonProps } from "./link/button.link";

type conditionalProps =
    | ({
          type?: "link";
      } & LinkButtonProps)
    | ({
          type?: "block";
      } & BlockButtonProps);

export type ButtonProps = BaseButtonProps & conditionalProps;
