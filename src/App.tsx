import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import useGetData from "./hooks/useGetData";
import { ProjectsData } from "./data/data";
import ProjectDetails from "./ProjectDetails";
import InnerSpan from "./InnerSpan";
import Global from "./globalConts";

function App() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, setData, available } = useGetData({
        maxX: (ref && ref.current && ref.current.clientWidth * 0.8) || undefined,
        maxY: (ref && ref.current && ref.current.clientHeight * 0.8) || undefined,
    });

    const random = (min: number, max: number) => min + Math.random() * (max - min);

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
            return (Math.random() - 0.5) * Global.OSCILLATION_COEFFICIENT;
        });
    };

    useEffect(() => {
        const interval = setInterval(tick, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div onMouseMove={moveHandler} ref={ref} className="container">
                {available &&
                    data.map(e => (
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
                            <InnerSpan name={e.name} />
                            <ProjectDetails
                                show={e.show || false}
                                left={20}
                                top={20}
                                name={e.name}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}

export default App;
