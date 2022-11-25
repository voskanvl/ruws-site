import React, { lazy, memo, Suspense } from "react";
import Menu from "./Menu/Menu";

const LazedLogo = lazy(() => import("./Logo"));

function Header() {
    return (
        <div className="header">
            <Suspense>
                <LazedLogo />
            </Suspense>
            <Menu />
        </div>
    );
}

export default memo(Header);
