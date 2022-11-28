import React from "react";
import App from "./pages/App";
import First from "./pages/First";
import Reviews from "./pages/Reviews";

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
            caption: "",
        },
        {
            id: 1,
            next: 5,
            previous: 0,
            name: "Projects",
            menu: "Проекты",
            path: "/projects",
            element: <App />,
            caption: "",
        },
        {
            id: 5,
            next: 0,
            previous: 1,
            name: "Reviews",
            menu: "Отзывы",
            path: "/reviews",
            element: <Reviews />,
            caption: "отзывы",
        },
    ],
    reviews: [
        {
            id: 0,
            name: "Равшан Размятуло оглы",
            img: "https://ozgrozer.github.io/100k-faces/0/0/000271.jpg",
            mark: 5,
            comment: "Просто потрясающая компания!!!",
        },
        {
            id: 1,
            name: "Синицына Василиса",
            img: "https://ozgrozer.github.io/100k-faces/0/3/003256.jpg",
            mark: 5,
            comment:
                "Ребята не только создали не замечательный интернет-магазин, но и занимаются постоянной загрузкой товаров! Рекомендую!!!",
        },
        {
            id: 2,
            name: "Юн Сок Хе",
            img: "https://ozgrozer.github.io/100k-faces/0/9/009237.jpg",
            mark: 4,
            comment: "인상적인 솜씨! 나는 흥분한다!",
        },
        {
            id: 3,
            name: "Фейруза Мухамедзянова",
            img: "https://ozgrozer.github.io/100k-faces/0/9/009934.jpg",
            mark: 2,
            comment: "Будь проклят тот день, когда я впервые села за баранку этого пылесоса",
        },
        {
            id: 4,
            name: "Фриц Розенштурм",
            img: "https://ozgrozer.github.io/100k-faces/0/0/000356.jpg",
            mark: 5,
            comment:
                "Und ich möchte schließen mit dem Bekenntnis, das ich einst aussprach, als ich den Kampf um die Macht im Reich begann. Damals sagte ich: Wenn unser Wille so stark ist, dass keine Not ihn mehr zu zwingen vermag, dann wird unser Wille und unser deutscher Stahl auch die Not meistern!",
        },
    ],
};
