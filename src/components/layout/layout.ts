import { NavbarProps } from "@components/navbar/navbar";
import { ParentProps } from "@types";
import { ReactNode } from "react";
/// TODO ADD OGs to layout
export interface LayoutProps extends ParentProps {
    ogTitle?: string;
    metaDescription?: string;
    ogDescription?: string | HTMLImageElement;
    ogType?: string;
    ogImage?: string;
    title?: string;
    header?: ParentProps["children"];
    gutter?: ParentProps["size"];
    sidebar?: ReactNode;
    navbar?: NavbarProps;
}
