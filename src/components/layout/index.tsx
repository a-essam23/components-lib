import styles from "./layout.module.scss";
import Navbar from "@components/navbar";
import { FC, useEffect } from "react";
import { LayoutProps } from "./layout";
// import { useMeasure } from "react-use";

const Layout: FC<LayoutProps> = ({
    children,
    className = "",
    style,
    variant = "primary",
    header,
    gutter = "md",
    sidebar,
    title = "Title",
    metaDescription = "",
    navbar,
}) => {
    // const [navbarRef, navbarDimensions] = useMeasure<HTMLElement>();
    const mainLayout = (
        <>
            {header}
            <main style={style} className={`h-full w-full ${className}`}>
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

    // useEffect(() => {
    //     setNavbarDimensions({
    //         width: navbarRef.current?.offsetWidth,
    //         height: navbarRef.current?.offsetHeight,
    //     });
    // }, []);

    return (
        <div className={`${styles["layout"]} ${styles[`layout--${variant}`]}`}>
            {navbar && <Navbar {...navbar} />}
            {sidebar ? (
                <div className={`flex `}>
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
