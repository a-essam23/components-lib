import styles from "./section.module.scss";
import Background from "@components/background";
import { FC, useEffect, useRef, useState } from "react";
import { SectionProps } from "./section";
const Section: FC<SectionProps> = ({
    id,
    title,
    className = "",
    style,
    variant,
    background,
    backgroundDimensions,
    backgroundVariant,
    children,
}) => {
    const [sectionDimensions, setSectionDimensions] = useState({
        height: 0,
        width: 0,
    });
    const sectionRef = useRef<any>(null);
    const { width, height } = sectionDimensions;
    useEffect(() => {
        setSectionDimensions({
            width: innerWidth,
            height: sectionRef.current?.offsetHeight,
        });
    }, []);
    return (
        <section
            id={id}
            style={style}
            ref={sectionRef}
            className={`${className}`}
        >
            <div
                style={{
                    height: `${height}px`,
                }}
                className={`
                ${styles["section"]}
                ${styles[`section--${variant}`] || styles["primary"]} `}
            >
                {background && (
                    <Background
                        type={background}
                        dimensions={backgroundDimensions || sectionDimensions}
                        variant={backgroundVariant}
                    />
                )}
            </div>
            {children}
        </section>
    );
};

export default Section;
