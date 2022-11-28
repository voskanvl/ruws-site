import React from "react";
import App from "./pages/App";
import First from "./pages/First";

export default {
    OSCILLATION_COEFFICIENT: 7,
    menu: [
        { name: "Главная", link: "/" },
        { name: "Проекты", link: "/projects" },
        { name: "Услуги", link: "#" },
        { name: "Прайс", link: "#" },
        { name: "О компании", link: "#" },
        { name: "Отзывы", link: "#" },
        { name: "Контакты", link: "#" },
    ],
    bigmenu: [
        { id: "01", name: "Создание сайтов" },
        { id: "02", name: "seo продвижение" },
        { id: "03", name: "контекст" },
        { id: "04", name: "веб дизайн " },
    ],
    mapPrioritetRatio: {
        main: 0.5,
        light: 0.25,
        lighter: 0.125,
    },
    common: {
        phone: "8 800 444-40-85",
    },
    pages: [
        {
            id: 0,
            next: 1,
            previous: 1,
            name: "Home",
            menu: "Главная",
            path: "/",
            element: <First />,
        },
        {
            id: 1,
            next: 0,
            previous: 0,
            name: "Home",
            menu: "Проекты",
            path: "/projects",
            element: <App />,
        },
    ],
};
