import React, { FC, PropsWithChildren, useCallback, WheelEventHandler } from "react";
import { useLocation, useNavigate } from "react-router";
import { pages } from "../globalData";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const getPage = useCallback(() => {
        return pages.find(e => e.path === location.pathname);
    }, [location]);

    const getPageById = useCallback(
        (i: number) => {
            return pages.find(e => e.id === i);
        },
        [location],
    );

    const handleWheel: WheelEventHandler<HTMLElement> = e => {
        const wheel = Math.sign(e.deltaY);
        const direct = wheel > 0 ? "next" : "previous";
        const nextPageIndex = getPage()[direct];
        console.log("🚀 ~ nextPageIndex", nextPageIndex);

        const nextPage = getPageById(nextPageIndex);

        if (nextPage === undefined && nextPage.path === undefined) return;

        navigate(nextPage.path, { state: { path: location.pathname } });
    };

    return (
        <>
            <main
                style={{ backgroundImage: `url("${getPage()?.background}")` }}
                onWheel={handleWheel}>
                <div className="page-container">{children}</div>
            </main>
        </>
    );
};

export default Layout;
