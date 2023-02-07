import Navbar from "@components/navbar";
import { useEffect, useRef, useState } from "react";
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
    const [navbarDimensions, setNavbarDimensions] = useState({
        width: 0,
        height: 0,
    });
    const navbarRef = useRef<any>(null);
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

    useEffect(() => {
        setNavbarDimensions({
            width: navbarRef.current?.offsetWidth,
            height: navbarRef.current?.offsetHeight,
        });
    }, []);

    return (
        <div className={`min-h-screen `}>
            {navbar && <Navbar Ref={navbarRef} size={size} {...navbar} />}
            <div className={`flex mt-[${navbarDimensions.height}px]`}>
                {sidebar}
                {mainLayout}
            </div>
        </div>
    );
};

export default Layout;
