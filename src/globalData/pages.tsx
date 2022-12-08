import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import First from "../pages/First";
import Reviews from "../pages/Reviews";
import Services from "../pages/Services";
import Price from "../pages/Price";
import About from "../pages/About";
import bg1 from "../assets/images/main.jpg";
import bg2 from "../assets/images/lines.png";

const pages = [
    {
        id: 0,
        next: 1,
        previous: 6,
        name: "Home",
        menu: "Главная",
        path: "/",
        element: <First />,
        caption: "",
        background: bg1,
    },
    {
        id: 1,
        next: 2,
        previous: 0,
        name: "Projects",
        menu: "Проекты",
        path: "/projects",
        element: <Projects />,
        caption: "",
        background: bg1,
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
        background: bg2,
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
        background: bg2,
    },
    {
        id: 4,
        next: 5,
        previous: 3,
        name: "About",
        menu: "О компании",
        path: "/about",
        element: <About />,
        caption: "",
        background: bg2,
    },
    {
        id: 5,
        next: 6,
        previous: 4,
        name: "Reviews",
        menu: "Отзывы",
        path: "/reviews",
        element: <Reviews />,
        caption: "отзывы",
        background: bg2,
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
        background: bg2,
    },
];

export default pages;
