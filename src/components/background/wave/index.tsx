import { FC } from "react";
import { WaveSVGProps } from "./wave";
const WaveSVG: FC<WaveSVGProps> = ({
    dimensions = { width: 0, height: 0 },
    className,
    id,
    size,
    style,
    variant,
}) => {
    const variants = {
        primary: "fill-dark",
        secondary: "fill-light",
        wild: "fill-wild",
    };
    return (
        // <svg
        //     width={"100%"}
        //     style={style}
        //     className={className}
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        //     // xmlSpace="preserve"
        //     preserveAspectRatio="xMidYMid meet"
        // >
        //     <path
        //         className={`${
        //             variants[variant as keyof WaveSVGProps["variant"]] ||
        //             variants["primary"]
        //         }`}
        //         fillOpacity="1"
        //         d={`M0,${0.7 * dimensions.height}
        //             L${0.0555555555555556 * dimensions.width},${
        //             0.65 * dimensions.height
        //         }
        //             C${0.111 * dimensions.width},${0.6 * dimensions.height},${
        //             0.222 * dimensions.width
        //         },${0.5 * dimensions.height},${0.333 * dimensions.width},${
        //             0.533 * dimensions.height
        //         }
        // C${0.444 * dimensions.width},${0.565 * dimensions.height},${
        //             0.555 * dimensions.width
        //         },${0.7343 * dimensions.height},${0.666 * dimensions.width},${
        //             0.734375 * dimensions.height
        //         }
        // C${0.7778 * dimensions.width},${0.734375 * dimensions.height},${
        //             0.8889 * dimensions.width
        //         },${0.565625 * dimensions.height},${
        //             0.9444 * dimensions.width
        //         },${0.4844 * dimensions.height}
        // L${dimensions.width},${0.4 * dimensions.height}
        // L${dimensions.width},0
        // L${0.9444 * dimensions.width},0
        // C${0.8888 * dimensions.width},0,${0.7777 * dimensions.width},0,${
        //             0.6666666666666667 * dimensions.width
        //         },0
        // C${0.5556 * dimensions.width},0,${0.4444 * dimensions.width},0,${
        //             0.3333 * dimensions.width
        //         },0
        // C${0.222222 * dimensions.width},0,${0.1111 * dimensions.width},0,${
        //             0.055556 * dimensions.width
        //         },0
        // L0,0
        // Z`}
        //     />
        // </svg>
        <svg
            width="100%"
            // height="100%"
            viewBox={`0 0 1440 690`}
            xmlns="http://www.w3.org/2000/svg"
            // className="transition duration-300 ease-in-out delay-150"
        >
            <path
                d="M 0,700 C 0,700 0,140 0,140 C 127.33333333333331,117.73333333333333 254.66666666666663,95.46666666666667 414,90 C 573.3333333333334,84.53333333333333 764.6666666666667,95.86666666666667 941,107 C 1117.3333333333333,118.13333333333333 1278.6666666666665,129.06666666666666 1440,140 C 1440,140 1440,700 1440,700 Z"
                stroke="none"
                stroke-width="0"
                fill="#ff0080"
                fill-opacity="0.265"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <path
                d="M 0,700 C 0,700 0,280 0,280 C 125.73333333333329,258.4 251.46666666666658,236.8 422,250 C 592.5333333333334,263.2 807.8666666666666,311.2 985,322 C 1162.1333333333334,332.8 1301.0666666666666,306.4 1440,280 C 1440,280 1440,700 1440,700 Z"
                stroke="none"
                stroke-width="0"
                fill="#ff0080"
                fill-opacity="0.4"
                className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
            <path
                d="M 0,700 C 0,700 0,420 0,420 C 190.40000000000003,441.20000000000005 380.80000000000007,462.40000000000003 548,454 C 715.1999999999999,445.59999999999997 859.2,407.6 1004,397 C 1148.8,386.4 1294.4,403.2 1440,420 C 1440,420 1440,700 1440,700 Z"
                stroke="none"
                stroke-width="0"
                fill="#ff0080"
                fill-opacity="0.53"
                className="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
            <path
                d="M 0,700 C 0,700 0,560 0,560 C 122.39999999999998,567.3333333333334 244.79999999999995,574.6666666666667 394,579 C 543.2,583.3333333333333 719.2,584.6666666666666 898,581 C 1076.8,577.3333333333334 1258.4,568.6666666666667 1440,560 C 1440,560 1440,700 1440,700 Z"
                stroke="none"
                stroke-width="0"
                fill="#ff0080"
                fill-opacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-3"
            ></path>
        </svg>
    );
};

export default WaveSVG;
