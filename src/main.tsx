import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./First";
import router from "./router";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
