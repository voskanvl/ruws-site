import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { First } from "./First";
import "./index.sass";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <First />
    </React.StrictMode>,
);
