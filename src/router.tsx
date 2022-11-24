import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import First from "./First";

// const a: RouteObject = { path: "/", element: <First /> };
const router = createBrowserRouter([
    { path: "/", element: <First /> },
    { path: "/projects", element: <App /> },
]);

export default router;
