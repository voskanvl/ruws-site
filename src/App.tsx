import { MouseEventHandler, useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useGetData from "./hooks/useGetData";
import { ProjectsData } from "./data/data";

function App() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, setData } = useGetData({
        maxX: (ref && ref.current && ref.current.clientWidth * 0.8) || undefined,
        maxY: (ref && ref.current && ref.current.clientHeight * 0.8) || undefined,
    });
    // console.log("🚀 ~ data", data);

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
        if (!ref || !ref.current) return;
        const { clientWidth, clientHeight } = ref.current;

        const shiftXPercent = (((x - clientWidth / 2) * 2) / clientWidth) * 100;
        const shiftYPercent = (((y - clientHeight / 2) * 2) / clientHeight) * 100;

        function translate(element: ProjectsData, shift: number): number {
            const mapPrioritetRatio = {
                main: 1,
                light: 0.5,
                lighter: 0.25,
            };
            return shift * mapPrioritetRatio[element.prioritet];
        }

        setData(state =>
            state.map(e => ({
                ...e,
                translateX: translate(e, shiftXPercent),
                translateY: translate(e, shiftYPercent),
            })),
        );
        console.log(data);
    };

    return (
        <div onMouseMove={moveHandler} ref={ref} className="container">
            {data.map(e => (
                <div
                    key={e.name}
                    className={`pin ${e.prioritet}`}
                    style={{
                        left: e.left,
                        top: e.top,
                        transform: `translateX(${e.translateX}px) translateY(${e.translateY}px)`,
                    }}>
                    {e.name}
                </div>
            ))}
        </div>
    );
}

export default App;
