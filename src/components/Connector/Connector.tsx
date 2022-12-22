import React, { FC } from "react";
import styles from "./Connector.module.sass";

interface ConnectorProps {
    show: boolean;
    shiftX: number;
    shiftY: number;
}

const Connector: FC<ConnectorProps> = ({ show, shiftX, shiftY }) => (
    <div className={styles.Connector} data-show={show}></div>
);

export default Connector;
