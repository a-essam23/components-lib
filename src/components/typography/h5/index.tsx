import styles from "../typography.module.scss";
import { FC } from "react";
import { HeadingProps } from "../typography";

const H5: FC<HeadingProps> = ({ children, variant }) => {
    return <div className={`${styles["h5"]}`}>{children}</div>;
};

export default H5;
