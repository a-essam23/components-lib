import { BlockButtonProps } from "@components/button/block/button_block";
import { LinkButtonProps } from "@components/button/link/button_link";
import { ButtonProps } from "./button";
import BlockButton from "./block";
import LinkButton from "./link";

const Button: React.FC<ButtonProps> = ({
    type = "block",
    children,
    className,
    hrefType,
    onClick,
    onClickAnimation,
    onHoverAnimation,
    size,
    style,
    variant,
}): JSX.Element => {
    switch (type) {
        case "block":
            return (
                <BlockButton
                    className={className}
                    hrefType={hrefType}
                    onClick={onClick}
                    onClickAnimation={
                        onClickAnimation as BlockButtonProps["onClickAnimation"]
                    }
                    onHoverAnimation={
                        onHoverAnimation as BlockButtonProps["onHoverAnimation"]
                    }
                    variant={variant}
                    style={style}
                    size={size}
                >
                    {children}
                </BlockButton>
            );
        case "link":
            return (
                <LinkButton
                    className={className}
                    hrefType={hrefType}
                    onClick={onClick}
                    onClickAnimation={
                        onClickAnimation as LinkButtonProps["onClickAnimation"]
                    }
                    onHoverAnimation={
                        onHoverAnimation as LinkButtonProps["onHoverAnimation"]
                    }
                    variant={variant}
                    style={style}
                    size={size}
                >
                    {children}
                </LinkButton>
            );
        default:
            return (
                <BlockButton
                    className={className}
                    hrefType={hrefType}
                    onClick={onClick}
                    onClickAnimation={
                        onClickAnimation as BlockButtonProps["onClickAnimation"]
                    }
                    onHoverAnimation={
                        onHoverAnimation as BlockButtonProps["onHoverAnimation"]
                    }
                    variant={variant}
                    style={style}
                    size={size}
                >
                    {children}
                </BlockButton>
            );
    }
};

export default Button;
