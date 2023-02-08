import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H1: FC<HeadingProps> = ({ children, variant }) => {
    return <h1 className={`${styles["h1"]}`}>{children}</h1>;
};

export default H1;
