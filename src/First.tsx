import React from "react";
import BigMenu from "./components/BigMenu";
import Header from "./components/Header";

export default function First() {
    return (
        <div className="main-container">
            <Header />
            <h1 className="main-title">РОССИЙСКАЯ ВЕБ СТУДИЯ - ЭТО</h1>
            <BigMenu />
        </div>
    );
}
