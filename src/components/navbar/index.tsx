import styles from "./navbar.module.scss";
import { FC } from "react";
import { Link as RLink } from "react-router-dom";
import { Button } from "@components";
import { NavbarProps } from "./navbar";

const Navbar: FC<NavbarProps> = ({
    className = "",
    size = "md",
    style,
    variant = "primary",
    Link = RLink,
    logo = { primary: "Title", to: "/" },
    items,
    Ref,
    id = "ae-components-navbar",
    shadowed = false,
    animate,
}): JSX.Element => {
    const variantClass = (component: "btn" = "btn") => {
        const variants = {
            primary: { btn: "secondary" },
            secondary: { btn: "primary" },
            wild: { btn: "primary" },
        };
        return (
            variants[variant as keyof NavbarProps["variant"]]?.[component] ||
            variants["primary"]?.[component]
        );
    };

    return (
        <nav
            id={id}
            style={style}
            ref={Ref}
            className={`${styles["navbar"]} container--${variant} ${
                shadowed ? "shadow-md" : ""
            } ${className}`}
        >
            <div
                id="ae-navbar"
                className={`flex mx-auto items-center justify-between container--${size}`}
            >
                <Link
                    type="link"
                    to={logo?.to || "/"}
                    className={`text-title text-control`}
                >
                    {logo[variant] || "Title"}
                </Link>

                <div className="flex gap-6 justify-evenly">
                    {items?.map((item, ind) => (
                        <Button
                            to={item.to}
                            key={`navbar-btn-${ind}`}
                            type="link"
                            size={size}
                            variant={variantClass("btn")}
                            onHoverAnimation="line"
                            onClickAnimation="none"
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
