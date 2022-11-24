import { MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useGetData from "./hooks/useGetData";
import { ProjectsData } from "./data/data";
import ProjectDetails from "./ProjectDetails";

const OSCILLATION_COEFFICIENT = 7;

function App() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, setData } = useGetData({
        maxX: (ref && ref.current && ref.current.clientWidth * 0.8) || undefined,
        maxY: (ref && ref.current && ref.current.clientHeight * 0.8) || undefined,
    });
    const [height, setheight] = useState(0);
    const [current, setcurrent] = useState<ProjectsData>();

    const random = useCallback((min: number, max: number) => min + Math.random() * (max - min), []);

    const maxX = useCallback(() => {
        if (ref && ref.current && ref.current.clientWidth) return ref.current.clientWidth * 0.8;
        else return 0;
    }, [ref]);
    const maxY = useCallback(() => {
        if (ref && ref.current && ref.current.clientHeight) return ref.current.clientHeight * 0.8;
        else return 0;
    }, [ref]);

    const moveHandler: MouseEventHandler<HTMLDivElement> = event => {
        const { pageX: x, pageY: y, target } = event;
        const targetElement = (target as HTMLElement).closest(".pin");

        if (targetElement) {
            setcurrent(data.find(e => e.show));
        } else {
            // setcurrent(undefined);
        }

        if (!ref || !ref.current) return;
        const { clientWidth, clientHeight } = ref.current;

        const shiftXPercent = (((x - clientWidth / 2) * 2) / clientWidth) * 100;
        const shiftYPercent = (((y - clientHeight / 2) * 2) / clientHeight) * 100;

        function translate(element: ProjectsData, shift: number): number {
            const mapPrioritetRatio = {
                main: 0.5,
                light: 0.25,
                lighter: 0.125,
            };
            return shift * mapPrioritetRatio[element.prioritet];
        }

        setData(state =>
            state.map(e => ({
                ...e,
                translateX: translate(e, shiftXPercent),
                translateY: translate(e, shiftYPercent),
                show: targetElement?.getAttribute("data-index") === e.name,
            })),
        );
    };

    const tick = () => {
        setheight(state => {
            return (Math.random() - 0.5) * OSCILLATION_COEFFICIENT;
        });
    };

    useEffect(() => {
        const interval = setInterval(tick, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div onMouseMove={moveHandler} ref={ref} className="container">
                {data.map(e => (
                    <div
                        key={e.name}
                        className={`pin ${e.prioritet}`}
                        style={{
                            left: e.left,
                            top: e.top,
                            transform: `translateX(${-e.translateX}px) translateY(${-e.translateY}px)`,
                            zIndex: e.show ? "3" : "0",
                        }}
                        data-index={e.name}>
                        <div
                            className="inner-span"
                            style={{
                                top: (Math.random() - 0.5) * OSCILLATION_COEFFICIENT + "px",
                                left: (Math.random() - 0.5) * OSCILLATION_COEFFICIENT + "px",
                                transition: Math.random() + "s",
                            }}>
                            {e.name}
                        </div>
                        <ProjectDetails show={e.show || false} left={20} top={20} name={e.name} />
                    </div>
                ))}
                {/* <ProjectDetails
                    show={(current && current.show) || false}
                    left={(current && current.left) || 0 + 20}
                    top={(current && current.top) || 0 + 20}
                    name={current && current.name}
                /> */}
            </div>
        </>
    );
}

export default App;
