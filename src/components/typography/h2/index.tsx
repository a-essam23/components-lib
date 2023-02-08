import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H2: FC<HeadingProps> = ({ children, variant }) => {
    return <h2 className={`${styles["h2"]}`}>{children}</h2>;
};

export default H2;
