import { useLocation, useNavigate, Route, Routes } from "react-router";
import { useTransition, animated } from "react-spring";
import Header from "./components/Header";
import pages from "./globalData/pages";
import Page404 from "./pages/404";

type ForwardBackward = "forward" | "backward";

export default function General() {
    const location = useLocation();
    const { pathname, state } = location;

    function detectDirection(): ForwardBackward {
        if (!state || !state.path) return "forward";
        const currentIndex = pages.find(e => e.path === pathname)?.id;
        const previousIndex = pages.find(e => e.path === state.path)?.id;
        if (currentIndex === undefined || previousIndex === undefined) return "forward";
        return currentIndex < previousIndex ? "backward" : "forward";
    }

    const direction = detectDirection();

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
            {transitions((props, item) => {
                console.log("props,item", props, item);
                return (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            overflow: "hidden",
                            // background: "#fff"
                        }}>
                        <Header />
                        <animated.div style={props}>
                            <Routes location={item}>
                                {pages.map(({ path, element }) => (
                                    <Route path={path} element={element} key={path} />
                                ))}
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </animated.div>
                    </div>
                );
            })}
        </>
    );
}
