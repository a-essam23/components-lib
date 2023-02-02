import Navbar from "@components/navbar";
import { useEffect } from "react";
import { LayoutProps } from "./layout";

const Layout = ({
    children,
    className = "",
    size,
    style,
    variant = "primary",
    header,
    gutter = "md",
    sidebar,
    title = "Title",
    metaDescription = "",
    navbar,
}: LayoutProps) => {
    const variantClass = (): string => {
        const variants = {
            primary: "bg-control",
            secondary: "bg-root",
            wild: "bg-wild",
        };
        return variants[variant] || variants["primary"];
    };

    const sizes = {
        sm: "w-9/12 xl:w-8/12 2xl:w-6/12",
        md: "w-11/12 xl:w-10/12 2xl:w-8/12",
        lg: "w-11/12 2xl:w-10/12",
    };
    const sizeClass = () => {
        return `${sizes[size as keyof LayoutProps["size"]] || sizes["md"]}`;
    };
    const mainLayout = (
        <>
            {header}
            <main
                style={style}
                className={`mx-auto h-full ${sizeClass()} ${className}`}
            >
                {children}
            </main>
        </>
    );
    useEffect(() => {
        document.title = title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", metaDescription);
    }, [title, metaDescription]);

    return (
        <div className={`min-h-screen ${variantClass()}`}>
            {navbar && <Navbar {...navbar} size={size} />}
            {sidebar ? (
                <div className="flex">
                    {sidebar}
                    {mainLayout}
                </div>
            ) : (
                mainLayout
            )}
        </div>
    );
};

export default Layout;
