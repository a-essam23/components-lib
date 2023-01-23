import { ParentProps } from "@types";

export interface ToggleProps extends ParentProps {
    label?: string | JSX.Element;
    toggled?: boolean;
    onChange?: (toggeled: boolean) => any;
    watch?: (toggeled: boolean) => any;
}
