import React from "react";
import { createRoot } from "react-dom/client";
import "./index.sass";
import { BrowserRouter as Router } from "react-router-dom";
// import router from "./router";
import General from "./General";

createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <Router>
        <General />
    </Router>,
    // </React.StrictMode>,
);
