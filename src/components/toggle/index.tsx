import { Button } from "@components";
import { ToggleProps } from "./toggle";
import { useState } from "react";

const Toggle = ({
    children,
    className,
    size,
    type,
    label,
    toggled = false,
    watch = (toggeled) => {},
    onChange = (toggeled) => {},
}: ToggleProps): JSX.Element => {
    const [isToggeled, setIsToggeled] = useState(toggled);
    const getType = () => {
        if (type === "secondary") return isToggeled ? "secondary" : "primary";
        if (type === "wild") return isToggeled ? "wild" : "secondary";
        return isToggeled ? "primary" : "secondary";
    };
    watch(isToggeled);
    return (
        <Button
            onClick={(): void => {
                onChange(!isToggeled);
                setIsToggeled(!isToggeled);
            }}
            size={size}
            type={getType()}
        >
            {label}
        </Button>
    );
};

export default Toggle;
