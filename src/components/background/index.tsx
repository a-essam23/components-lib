import { FC } from "react";
import { BackgroundProps } from "./background";
import WaveSVG from "./wave";

const Background: FC<BackgroundProps> = (props) => {
    const variants = {
        primary: "fill-root",
        secondary: "fill-light",
        wild: "fill-wild",
    };
    const types = {
        wave: <WaveSVG {...props} />,
    };
    return types[props.type as keyof BackgroundProps["type"]] || types["wave"];
};

export default Background;
