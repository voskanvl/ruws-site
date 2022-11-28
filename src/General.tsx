import { useState } from "react";
import { useLocation, useNavigate, Route, Routes } from "react-router";
import { useTransition, animated } from "react-spring";
import Global from "./globalConts";

type ForwardBackward = "forward" | "backward";

export default function General() {
    const location = useLocation();
    const navigate = useNavigate();
    const [direction, setDirection] = useState<ForwardBackward>("forward");

    const calcTransitionConfig = () => ({
        from: {
            opacity: 1,
            transform: `translateX(${direction === "forward" ? "" : "-"}100%)`,
        },
        enter: {
            opacity: 1,
            transform: `translateX(0%)`,
        },
        leave: {
            opacity: 1,
            transform: `translateX(${direction === "forward" ? "-" : ""}100%)`,
        },
        trail: 500,
        // config: { duration: 2000 }
    });

    const transitions = useTransition(location.pathname, calcTransitionConfig());

    return (
        <>
            {transitions((props, item) => (
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        overflowX: "hidden",
                        // background: "#fff"
                    }}>
                    <animated.div style={props}>
                        <Routes location={item}>
                            {Global.pages.map(({ path, element }) => (
                                <Route path={path} element={element} key={path} />
                            ))}
                        </Routes>
                    </animated.div>
                </div>
            ))}
        </>
    );
}