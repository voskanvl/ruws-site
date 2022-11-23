import { useState } from "react";
export type ProjectsData = {
    name: string;
    prioritet: "main" | "light" | "lighter";
    left: number;
    top: number;
    translateX: number;
    translateY: number;
};
const a: ProjectsData[] = [
    { name: "РОСАТОМ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "РОСТЕХ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "РОСТЕЛЕКОМ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "РОСИНОВАЦИИ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "РОСКОМСВОБОДА", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "МТС", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "БИЛАЙН", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "МЕГАФОН", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ЛЕРУА МЕРЛЕН", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "МАГНИТ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "НОРИЛЬСКИЙ НИКЕЛЬ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "НЛМК", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "БАЗОВЫЙ ЭЛЕМЕНТ", prioritet: "main", left: 0, top: 0, translateX: 0, translateY: 0 },

    { name: "ВЕКТОР", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "СТАТУС", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "БАТЕРФЛЯЙ", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "СУДНИЦИН и Ко", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    {
        name: "ГРИГОРИЙ и КАКИЕ-ТО",
        prioritet: "light",
        left: 0,
        top: 0,
        translateX: 0,
        translateY: 0,
    },
    { name: "АДЕВИЛЬ", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "На Набережной", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ГУССТ №5", prioritet: "light", left: 0, top: 0, translateX: 0, translateY: 0 },

    { name: "САН", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "С УСАМ", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "СЕРАФИМ", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ХЕРУВИМ", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ЙЕРШАЛАИМ", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ТЕХНИКА", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "ШВСМ", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "НКВД", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
    { name: "KGBT+", prioritet: "lighter", left: 0, top: 0, translateX: 0, translateY: 0 },
];

export default a;
