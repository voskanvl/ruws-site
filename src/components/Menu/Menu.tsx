import { Link, useLocation } from "react-router-dom";
import Global from "../../globalConts";
import style from "./Menu.module.sass";
export default function Menu() {
    const location = useLocation();
    return (
        <ul className={style.menu}>
            {Global.pages.map(item => (
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
                <a href={"tel:" + Global.common.phones.data[0]}>{Global.common.phones.data[0]}</a>
            </li>
        </ul>
    );
}
