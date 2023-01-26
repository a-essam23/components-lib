import Button from "@components/button";
import { ToggleProps } from "./toggle";
import { useState } from "react";

const Toggle = ({
    children = "",
    className = "",
    size,
    type,
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
    // TODO FIX onClick animations >> type
    watch(isToggeled);
    return (
        <Button
            onClick={(): void => {
                onChange(!isToggeled !== false);
                setIsToggeled(!isToggeled);
            }}
            size={size}
            type={getType()}
            className={className}
        >
            {children}
        </Button>
    );
};

export default Toggle;
