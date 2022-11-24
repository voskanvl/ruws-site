import { lazy, memo } from "react";
import logo from "./assets/svg/logo.svg";

const Logo = () => <img src={logo} />;

export default memo(Logo);
