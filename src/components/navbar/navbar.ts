import { ComponentProps, ComponentVariants, LinkComponent } from "@types";
import { ReactNode } from "react";

export type NavbarItem = {
    label: string | ReactNode;
    to: string;
};

export interface NavbarItems {
    logo: {
        [key in ComponentVariants]?: NavbarItem["label"];
    } & { to?: NavbarItem["to"] };
    items?: NavbarItem[];
}

export interface NavbarProps extends ComponentProps, NavbarItems {
    Link?: LinkComponent;
    shadowed?: boolean;
    animate?: boolean;
}
