import { ComponentProps } from "@types";
export type SVGDimensions = { height: number; width: number };
export interface BackgroundProps extends ComponentProps {
    dimensions: SVGDimensions;
    type?: "wave";
}
