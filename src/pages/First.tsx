import React from "react";
import BigMenu from "../components/BigMenu";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function First() {
    return (
        <Layout>
            <h1 className="main-title">РОССИЙСКАЯ ВЕБ СТУДИЯ - ЭТО</h1>
            <BigMenu />
        </Layout>
    );
}
