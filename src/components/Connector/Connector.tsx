import React, { FC } from "react";
import styles from "./Connector.module.sass";

interface ConnectorProps {
    show: boolean;
}

const Connector: FC<ConnectorProps> = ({ show }) => (
    <div className={styles.Connector} data-show={show}></div>
);

export default Connector;
