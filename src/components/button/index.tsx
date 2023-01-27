import { ButtonProps } from "./button";
import BlockButton from "./block";
import LinkButton from "./link";

const Button = ({
    children = "",
    className = "",
    hrefType = "button",
    onClick,
    size = "md",
    style,
    type = "block",
    variant = "primary",
}: ButtonProps): JSX.Element => {
    // switch (props.type) {
    //     case "block":
    //         return <BlockButton {...props} />;
    //     case "link":
    //         return <LinkButton {...props} />;
    //     default:
    //         return <></>;
    // }
    const types = {
        block: (
            <BlockButton
                className={className}
                variant={variant}
                onClick={onClick}
                size={size}
            >
                {children}
            </BlockButton>
        ),
        link: (
            <BlockButton
                className={className}
                variant={variant}
                onClick={onClick}
                size={size}
            >
                {children}
            </BlockButton>
        ),
    };
    return types[type as keyof ButtonProps["type"]] || types["block"];
};

export default Button;
