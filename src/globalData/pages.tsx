import App from "../pages/App";
import Contacts from "../pages/Contacts";
import First from "../pages/First";
import Reviews from "../pages/Reviews";
import Services from "../pages/Services";
import Price from "../pages/Price";

export default [
    {
        id: 0,
        next: 1,
        previous: 6,
        name: "Home",
        menu: "Главная",
        path: "/",
        element: <First />,
        caption: "",
    },
    {
        id: 1,
        next: 2,
        previous: 0,
        name: "Projects",
        menu: "Проекты",
        path: "/projects",
        element: <App />,
        caption: "",
    },
    {
        id: 2,
        next: 3,
        previous: 1,
        name: "Services",
        menu: "Услуги",
        path: "/services",
        element: <Services />,
        caption: "",
    },
    {
        id: 3,
        next: 5,
        previous: 2,
        name: "Price",
        menu: "Прайс",
        path: "/price",
        element: <Price />,
        caption: "",
    },
    {
        id: 5,
        next: 6,
        previous: 3,
        name: "Reviews",
        menu: "Отзывы",
        path: "/reviews",
        element: <Reviews />,
        caption: "отзывы",
    },
    {
        id: 6,
        next: 0,
        previous: 5,
        name: "Contacts",
        menu: "Контакты",
        path: "/contacts",
        element: <Contacts />,
        caption: "Контакты",
    },
];
