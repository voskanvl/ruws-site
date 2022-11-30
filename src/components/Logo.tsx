import { lazy, memo } from "react";
import logo from "../assets/svg/logo.svg";

function Logo() {
    return <img src={logo} width="94" height="130" />;
}

export default memo(Logo);
