import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H4: FC<HeadingProps> = ({ children, variant }) => {
    return <h4 className={`${styles["h4"]}`}>{children}</h4>;
};

export default H4;
