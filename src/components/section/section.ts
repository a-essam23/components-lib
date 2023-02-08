import { BackgroundProps } from "@components/background/background";
import { ParentProps } from "@types";
import { ReactNode } from "react";
export interface SectionProps extends ParentProps {
    title?: string | ReactNode | ReactNode[];
    background?: BackgroundProps["type"];
    backgroundDimensions?: BackgroundProps["dimensions"];
    backgroundVariant?: ParentProps["variant"];
    cover?: "";
}
