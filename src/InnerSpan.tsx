import { FC } from "react";
import Global from "./globalConts";

const InnerSpan: FC<{ name: string }> = ({ name }) => (
    <div
        className="inner-span"
        style={{
            top: (Math.random() - 0.5) * Global.OSCILLATION_COEFFICIENT + "px",
            left: (Math.random() - 0.5) * Global.OSCILLATION_COEFFICIENT + "px",
            transition: Math.random() + "s",
        }}>
        {name}
    </div>
);

export default InnerSpan;
