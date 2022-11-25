import { FC, memo } from "react";

type ProjectDetailsProps = {
    show: boolean;
    left: number;
    top: number;
    name?: string;
};

const ProjectDetails: FC<ProjectDetailsProps> = ({ show, left, top, name }) => {
    return (
        <div
            className="panel"
            data-show={show}
            style={{
                left: left + "px",
                top: top + "px",
            }}>
            {name}
            <div>
                <img src={`https://picsum.photos/id/${(200 + Math.random() * 100) | 0}/200/300`} />
            </div>
        </div>
    );
};

export default memo(ProjectDetails);
