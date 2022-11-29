import React, { CSSProperties, ReactNode, useEffect, useState, FC } from "react";
import styles from "./CommonDetails.module.sass";

type CommonDetailsProps = {
    Img: FC;
    str: string | string[];
};

function CommonDetails({ Img, str }: CommonDetailsProps) {
    return (
        <div className={styles.commonDetails}>
            <Img />
            <div className={styles.commonDetails__item}>
                {Array.isArray(str) ? str.map((e, i) => <div key={i}>{e}</div>) : str}
            </div>
        </div>
    );
}

export default CommonDetails;
//
