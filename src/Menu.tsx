import { Link } from "react-router-dom";
import Global from "./globalConts";
import style from "./Menu.module.sass";
export default function Menu() {
    return (
        <ul className={style.menu}>
            {Global.menu.map(item => (
                <li key={item.name} className={style.menu__item}>
                    <Link to="/projects">{item.name}</Link>
                </li>
            ))}
        </ul>
    );
}
