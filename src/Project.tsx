import { ProjectsData } from "./data/data";
import ProjectDetails from "./ProjectDetails";
import InnerSpan from "./InnerSpan";
import { FC } from "react";

const Project: FC<{ data: ProjectsData }> = ({ data }) => (
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
        <ProjectDetails show={data.show || false} left={20} top={20} name={data.name} />
    </div>
);
export default Project;
