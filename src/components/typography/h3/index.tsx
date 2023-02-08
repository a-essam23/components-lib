import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H3: FC<HeadingProps> = ({ children, variant }) => {
    return <h3 className={`${styles["h3"]}`}>{children}</h3>;
};

export default H3;
