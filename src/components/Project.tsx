import type { ProjectsData } from "../globalData";
import ProjectDetails from "./ProjectDetails";
import InnerSpan from "./InnerSpan";
import Global from "../globalConts";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Project({ data }: { data: ProjectsData }) {
    const [_, reload] = useState(0);

    const location = useLocation();

    const tick = () => {
        reload(_ => {
            return (Math.random() - 0.5) * Global.OSCILLATION_COEFFICIENT;
        });
    };

    useEffect(() => {
        let interval = 0;
        if (location.pathname === "/projects") {
            interval = setInterval(tick, 200 + Math.random() * 800);
        }
        if (!!interval) return () => clearInterval(interval);
    }, [location]);

    return (
        <div
            key={data.name}
            className={`pin ${data.prioritet}`}
            style={{
                left: data.left,
                top: data.top,
                transform: `translateX(${-data.translateX}px) translateY(${-data.translateY}px)`,
                zIndex: data.show ? "3" : "0",
            }}
            data-index={data.name}>
            <InnerSpan name={data.name} />
            {/* <ProjectDetails show={data.show || false} left={20} top={20} name={data.name} /> */}
            <ProjectDetails data={data} />
        </div>
    );
}
export default Project;
