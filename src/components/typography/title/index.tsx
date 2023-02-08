import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const Title: FC<HeadingProps> = ({ children, variant }) => {
    return <div className={`${styles["title"]}`}>{children}</div>;
};

export default Title;
