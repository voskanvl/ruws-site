import { FC, useEffect, useRef } from "react";

type BigMenuItemProps = {
    elem: { id: string; name: string };
};

const BigMenuItem: FC<BigMenuItemProps> = ({ elem }) => {
    const item = useRef<HTMLDivElement>(null);

    const randomLetters = (numbers: number): string => {
        return (
            Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
        ).slice(0, numbers);
    };

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            item.current && (item.current.innerText = randomLetters(elem.name.length));
            if (count > 20) {
                clearInterval(interval);
                item.current && (item.current.innerText = elem.name);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div ref={item} className="bigmenu-item"></div>
        </>
    );
};
export default BigMenuItem;
