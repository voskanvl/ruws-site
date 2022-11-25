import { Link, useLocation } from "react-router-dom";
import Global from "../../globalConts";
import style from "./Menu.module.sass";
export default function Menu() {
    const location = useLocation();
    console.log("🚀 ~ location", location);
    return (
        <ul className={style.menu}>
            {Global.menu.map(item => (
                <li
                    key={item.name}
                    className={style.menu__item}
                    data-active={item.link === location.pathname}>
                    <Link to={item.link}>{item.name}</Link>
                </li>
            ))}
            <li key="phone" className={style.menu__item}>
                <a href={"tel:" + Global.common.phone}>{Global.common.phone}</a>
            </li>
        </ul>
    );
}
