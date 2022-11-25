import { ProjectsData } from "../data/data";
import ProjectDetails from "./ProjectDetails";
import InnerSpan from "./InnerSpan";
import Global from "../globalConts";
import { FC, useEffect, useState } from "react";

const Project: FC<{ data: ProjectsData }> = ({ data }) => {
    const [_, reload] = useState(0);

    const tick = () => {
        reload(_ => {
            return (Math.random() - 0.5) * Global.OSCILLATION_COEFFICIENT;
        });
    };

    useEffect(() => {
        const interval = setInterval(tick, 200 + Math.random() * 800);
        return () => clearInterval(interval);
    }, []);

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
};
export default Project;
