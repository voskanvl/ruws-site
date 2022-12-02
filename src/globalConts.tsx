import {
    pages,
    reviews,
    services,
    partners,
    platforms,
    price,
    products,
    records,
} from "./globalData/";

import pin from "./assets/images/icons/black/pin.png";
import phone from "./assets/images/icons/black/phone.png";
import email from "./assets/images/icons/black/email.png";
import clock from "./assets/images/icons/black/clock.png";

export default {
    OSCILLATION_COEFFICIENT: 7,
    common: {
        address: {
            data: "Россия, г. Пенза, Набережная реки Мойки, 39",
            img: pin,
        },
        phones: {
            data: ["8 800 444-40-85", "+7 (8412) 20-25-85", "+7 (8412) 20-25-86"],
            img: phone,
        },
        email: { data: "client@russiaws.ru", img: email },
        clock: {
            data: ["Пн-Пт: 09:00 – 18:00", "Сб-Вс: Выходной"],
            img: clock,
        },
    },

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

    pages,
    reviews,
    services,
    partners,
    platforms,
    price,
    products,
    records,
};
