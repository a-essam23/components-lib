import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H6: FC<HeadingProps> = ({ children, variant }) => {
    return <div className={`${styles["normal"]}`}>{children}</div>;
};

export default H6;
