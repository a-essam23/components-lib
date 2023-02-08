import styles from "./card.module.scss";
import { FC } from "react";
import { CardProps } from "./card";

const Card: FC<CardProps> = ({
    Ref,
    children = "",
    className = "",
    id,
    size = "md",
    style,
    variant = "primary",
}) => {
    return (
        <div
            className={`border-2
        ${styles["card"]}
        ${styles[`card--${variant}`] || styles["card--primary"]}
        ${styles[`card--${size}`] || styles["card--md"]} 
        ${className}
        `}
            id={id}
        >
            {children}
        </div>
    );
};

export default Card;
