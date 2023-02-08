import styles from "./section.module.scss";
import { useMeasure } from "react-use";
import Background from "@components/background";
import { FC } from "react";
import { SectionProps } from "./section";
const Section: FC<SectionProps> = ({
    id,
    title,
    className = "",
    style,
    size = "md",
    Ref,
    variant,
    background,
    backgroundDimensions,
    backgroundVariant,
    children,
}) => {
    // * height is a state instead of ref
    const [sectionRef, sectionDimensions] = useMeasure<HTMLElement>();
    // const [sectionDimensions, setSectionDimensions] = useState({
    //     height: 0,
    //     width: 0,
    // });
    // const sectionRef = useRef<any>(null);
    const { width, height } = sectionDimensions;
    // useEffect(() => {
    //     setSectionDimensions({
    //         width: innerWidth,
    //         height: sectionRef.current?.offsetHeight,
    //     });
    // }, []);
    // TODO transfer background styling to background component
    return (
        <section
            id={id}
            style={style}
            ref={Ref || sectionRef}
            className={`
            ${styles["section"]} 
            ${styles[`section--${variant}`] || styles["section--primary"]}`}
        >
            {background && (
                <Background
                    type={background}
                    dimensions={backgroundDimensions || sectionDimensions}
                    variant={backgroundVariant}
                />
            )}
            <div
                className={`mx-auto w-full
                ${styles[`section--${size}`] || styles["md"]}
                ${className}`}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;
