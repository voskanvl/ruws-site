import { FC, useEffect, useRef } from "react";

type BigMenuItemProps = {
    elem: { id: string; name: string };
};

function BigMenuItem({ elem }: BigMenuItemProps) {
    const item = useRef<HTMLAnchorElement>(null);

    const randomLetters = (str: string): string => {
        return str.replace(/([a-zA-Zа-яёА-ЯЁ])/g, _ => Math.random().toString(36).substring(2)[0]);
    };

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            item.current && (item.current.innerText = randomLetters(elem.name));
            if (count > 7 * Number(elem.id)) {
                clearInterval(interval);
                item.current && (item.current.innerText = elem.name);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return <a href="#" ref={item} className="bigmenu-item" data-number={elem.id}></a>;
}
export default BigMenuItem;
