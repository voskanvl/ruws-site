import { Link, useLocation } from "react-router-dom";
import common from "../../globalData/common";
import pages from "../../globalData/pages";
import style from "./Menu.module.sass";
export default function Menu() {
    const location = useLocation();
    return (
        <ul className={style.menu}>
            {pages.map(item => (
                <li
                    key={item.name}
                    className={style.menu__item}
                    data-active={item.path === location.pathname}>
                    <Link to={item.path} state={{ path: location.pathname }}>
                        {item.menu}
                    </Link>
                </li>
            ))}
            <li key="phone" className={style.menu__item}>
                <a href={"tel:" + common.phones.data[0]}>{common.phones.data[0]}</a>
            </li>
        </ul>
    );
}
