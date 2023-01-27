import { BaseButtonProps } from "@types";
import { BlockButtonProps } from "./block/button.block";
import { LinkButtonProps } from "./link/button.link";

type ButtonTypes = { type?: "block" | "link" };

type conditionalProps =
    | ({
          type?: "link";
      } & LinkButtonProps)
    | ({
          type?: "block";
      } & BlockButtonProps);

export type ButtonProps = BaseButtonProps & ButtonTypes;
