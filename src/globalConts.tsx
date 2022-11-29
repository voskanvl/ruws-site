import React from "react";
import App from "./pages/App";
import First from "./pages/First";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";

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
            id: 2,
            next: 5,
            previous: 1,
            name: "Services",
            menu: "Услуги",
            path: "/services",
            element: <Services />,
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
        {
            id: 5,
            name: "Иосиф Абрамовиц",
            img: "https://images.unsplash.com/photo-1532784018373-f957e234f3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
            mark: 5,
            comment: "לא לחכות",
        },
    ],
    services: [
        {
            id: 0,
            name: "Ведение социальных сетей",
            img: "../src/assets/images/services/app 1.svg",
            href: "#",
        },
        {
            id: 1,
            name: "Разработка сайтов и интернет магазинов",
            caption:
                "Создание интернет-магазинов. Мы поможем Вам создать сайт и получать через него заказы. ",
            img: "../src/assets/images/services/app 2.svg",
            href: "#",
        },
        {
            id: 2,
            name: "Настройка Яндекс Директ и Google Adwords",
            img: "../src/assets/images/services/app 3.svg",
            href: "#",
        },
        {
            id: 3,
            name: "SEO оптимизация",
            img: "../src/assets/images/services/app 3.svg",
            href: "#",
            caption:
                "повышению соответствия страниц поисковым запросам (релевантности), корректировке структуры и контента,улучшению коммерческих факторов,повышению валидности кода страниц,наращиванию внешних факторов значимости ресурса.",
        },
        {
            id: 4,
            name: "Услуги хостинга",
            img: "../src/assets/images/services/app 3.svg",
            href: "#",
            caption:
                " услуга по предоставлению ресурсов для размещения информации на сервере, постоянно имеющем доступ к сети ",
        },
    ],
    partners: [
        {
            name: "сантехкомплект",
            href: "#",
            img: "../src/assets/images/partners/santechcomplect.png",
        },
        { name: "двс сура", href: "#", img: "../src/assets/images/partners/sura.png" },
        { name: "школа хоккея дизель", href: "#", img: "../src/assets/images/partners/disel.png" },
        { name: "автошкола 58", href: "#", img: "../src/assets/images/partners/autoschool.png" },
        {
            name: "росполе",
            href: "https://www.ros-pole.ru",
            img: "../src/assets/images/partners/rospole.png",
        },
        {
            name: "il gusto",
            href: "#",
            img: "../src/assets/images/partners/ilgusto.png",
        },
        {
            name: "003",
            href: "#",
            img: "../src/assets/images/partners/003.png",
        },
    ],
};
