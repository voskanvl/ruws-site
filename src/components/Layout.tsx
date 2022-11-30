import React, { FC, PropsWithChildren, useCallback } from "react";
import { useLocation } from "react-router";
import Global from "../globalConts";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();

    const getBG = useCallback(() => {
        return Global.pages.find(e => e.path === location.pathname)?.background;
    }, [location]);

    return (
        <main style={{ background: `url("${getBG()}") no-repeat` }}>
            <div className="page-container">{children}</div>
        </main>
    );
};

export default Layout;
