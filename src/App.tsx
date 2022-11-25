import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import useGetData from "./hooks/useGetData";
import { ProjectsData } from "./data/data";

import Global from "./globalConts";
import Project from "./components/Project";
import Header from "./components/Header";

function App() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, setData, available } = useGetData({
        maxX: (ref && ref.current && ref.current.clientWidth * 0.8) || undefined,
        maxY: (ref && ref.current && ref.current.clientHeight * 0.8) || undefined,
    });
    const [_, setheight] = useState(0);

    const moveHandler: MouseEventHandler<HTMLDivElement> = event => {
        const { pageX: x, pageY: y, target } = event;
        const targetElement = (target as HTMLElement).closest(".pin");

        if (!ref || !ref.current) return;
        const { clientWidth, clientHeight } = ref.current;

        const shiftXPercent = (((x - clientWidth / 2) * 2) / clientWidth) * 100;
        const shiftYPercent = (((y - clientHeight / 2) * 2) / clientHeight) * 100;

        function translate(element: ProjectsData, shift: number): number {
            const { mapPrioritetRatio } = Global;
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
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <div onMouseMove={moveHandler} ref={ref} className="container">
                {available && data.map(e => <Project data={e} />)}
            </div>
        </>
    );
}

export default App;
