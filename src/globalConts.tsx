import { pages, reviews, services, partners } from "./globalData/";

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
    platforms: [
        {
            id: 0,
            name: "1С Битрикс",
            title: "Почему лучше 1С Битрикс?",
            text: "Безопасность и устойчивость к нагрузкам: модуль проактивной защиты, мощный веб-антивирус, защита от DDoS, технология ОТР, контроль целостности скрипта — все это сводит к минимуму вероятность взлома сайта и хищения данных.",
        },
        {
            id: 1,
            name: "WordPress",
            title: "Почему лучше WordPress?",
            text: "Безопасность и устойчивость к нагрузкам: модуль проактивной защиты, мощный веб-антивирус, защита от DDoS, технология ОТР, контроль целостности скрипта — все это сводит к минимуму вероятность взлома сайта и хищения данных.",
        },
        {
            id: 2,
            name: "OpenCart",
            title: "Почему лучше OpenCart?",
            text: "Безопасность и устойчивость к нагрузкам: модуль проактивной защиты, мощный веб-антивирус, защита от DDoS, технология ОТР, контроль целостности скрипта — все это сводит к минимуму вероятность взлома сайта и хищения данных.",
        },
        {
            id: 3,
            name: "MEVN-стек",
            title: "Почему лучше MEVN-стек?",
            text: "Безопасность и устойчивость к нагрузкам: модуль проактивной защиты, мощный веб-антивирус, защита от DDoS, технология ОТР, контроль целостности скрипта — все это сводит к минимуму вероятность взлома сайта и хищения данных.",
        },
    ],
    price: [
        {
            id: 0,
            name: "Landing-page",
            platform: [
                {
                    id: 0,
                    platforms: 0,
                    cost: "от 1 000 000 ₽",
                    time: "от 14 рабочих дней",
                },
                {
                    id: 1,
                    platforms: 1,
                    cost: "от 2 000 000 ₽",
                    time: "от 15 рабочих дней",
                },
                {
                    id: 2,
                    platforms: 2,
                    cost: "от 3 000 000 ₽",
                    time: "от 30 рабочих дней",
                },
                {
                    id: 3,
                    platforms: 3,
                    cost: "от 4 000 000 ₽",
                    time: "от 40 рабочих дней",
                },
            ],
        },
        {
            id: 1,
            name: "Интренет-магазин",
            platform: [
                {
                    id: 0,
                    platforms: 0,
                    cost: "от 1 000 000 ₽",
                    time: "от 14 рабочих дней",
                },
                {
                    id: 1,
                    platforms: 1,
                    cost: "от 2 000 000 ₽",
                    time: "от 15 рабочих дней",
                },
                {
                    id: 2,
                    platforms: 2,
                    cost: "от 3 000 000 ₽",
                    time: "от 30 рабочих дней",
                },
                {
                    id: 3,
                    platforms: 3,
                    cost: "от 4 000 000 ₽",
                    time: "от 40 рабочих дней",
                },
            ],
        },
        {
            id: 2,
            name: "Сайт-визитка",
            platform: [
                {
                    id: 0,
                    platforms: 0,
                    cost: "от 1 000 000 ₽",
                    time: "от 14 рабочих дней",
                },
                {
                    id: 1,
                    platforms: 1,
                    cost: "от 2 000 000 ₽",
                    time: "от 15 рабочих дней",
                },
                {
                    id: 2,
                    platforms: 2,
                    cost: "от 3 000 000 ₽",
                    time: "от 30 рабочих дней",
                },
                {
                    id: 3,
                    platforms: 3,
                    cost: "от 4 000 000 ₽",
                    time: "от 40 рабочих дней",
                },
            ],
        },
        {
            id: 3,
            name: "Портал",
            platform: [
                {
                    id: 0,
                    platforms: 0,
                    cost: "от 1 000 000 ₽",
                    time: "от 14 рабочих дней",
                },
                {
                    id: 1,
                    platforms: 1,
                    cost: "от 2 000 000 ₽",
                    time: "от 15 рабочих дней",
                },
                {
                    id: 2,
                    platforms: 2,
                    cost: "от 3 000 000 ₽",
                    time: "от 30 рабочих дней",
                },
                {
                    id: 3,
                    platforms: 3,
                    cost: "от 4 000 000 ₽",
                    time: "от 40 рабочих дней",
                },
            ],
        },
    ],
};
