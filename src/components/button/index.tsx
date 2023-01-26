import { ButtonProps } from "./button";
import BlockButton from "./block";
import LinkButton from "./link";

const Button = (props: ButtonProps = { type: "block" }): JSX.Element => {
    switch (props.type) {
        case "block":
            return <BlockButton {...props} />;
        case "link":
            return <LinkButton {...props} />;
        default:
            return <></>;
    }
    // const types = {
    //     block: <BlockButton {...props} />,
    //     link: <LinkButton {...props} />,
    // };
    // return types[props.type as keyof ButtonProps["type"]] || types["block"];
};

export default Button;
