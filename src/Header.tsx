import React, { lazy, Suspense } from "react";
import Menu from "./Menu";

const LazedLogo = lazy(() => import("./Logo"));

export default function Header() {
    return (
        <div className="header">
            <Suspense>
                <LazedLogo />
            </Suspense>
            <Menu />
        </div>
    );
}
