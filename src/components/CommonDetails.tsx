import React, { CSSProperties, ReactNode, useEffect, useState, FC } from "react";
import styles from "./CommonDetails.module.sass";

type CommonDetailsProps = {
    Img: FC;
    Str: FC;
};

function CommonDetails({ Img, Str }: CommonDetailsProps) {
    return (
        <div className={styles.commonDetails}>
            <Img />
            <div className={styles.commonDetails__item}>
                <Str />
            </div>
        </div>
    );
}

export default CommonDetails;
//
