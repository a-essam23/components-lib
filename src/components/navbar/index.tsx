import { FC } from "react";
import { Link as RLink } from "react-router-dom";
import { Button } from "@components";
import { NavbarProps } from "./navbar";

const Navbar: FC<NavbarProps> = ({
    className = "",
    size,
    style,
    variant = "primary",
    Link = RLink,
    logo = { label: "Title" },
    items,
}): JSX.Element => {
    const sizeClass = (): string => {
        const sizes = {
            sm: "w-9/12 xl:w-8/12 2xl:w-6/12",
            md: "w-11/12 xl:w-10/12 2xl:w-8/12",
            lg: "w-11/12 2xl:w-10/12",
        };
        return sizes[size as keyof NavbarProps["size"]] || sizes["md"];
    };
    const variantClass = (component: "nav" | "btn" = "nav") => {
        const variants = {
            primary: { nav: "bg-root", btn: "secondary" },
            secondary: { nav: "bg-control", btn: "primary" },
            wild: { nav: "bg-wild", btn: "primary" },
        };
        return (
            variants[variant as keyof NavbarProps["variant"]]?.[component] ||
            variants["primary"]?.[component]
        );
    };
    return (
        <nav
            style={style}
            className={`${variantClass()} w-full flex items-center justify-center py-2 ${className}`}
        >
            <div
                id="ae-navbar"
                className={`flex items-center justify-between ${sizeClass()}`}
            >
                <Link
                    type="link"
                    to={logo?.to || "/"}
                    className="text-title text-control"
                >
                    {logo?.label || "Title"}
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
