import React, { FC } from "react";
import styles from "./ServiceItem.module.sass";

type ServiceItemsProps = {
    e: {
        id: number;
        name: string;
        img: string;
        href: string;
        caption?: string;
    };
    active: boolean;
};

function ServiceItem({ e, active }: ServiceItemsProps) {
    return (
        <div className={styles.serviceItem}>
            <img src={e.img} />
            <div className={styles.serviceItem__name}>{e.name}</div>
            <div className={styles.serviceItem__caption} style={{ opacity: active ? 1 : 0 }}>
                {e.caption}
            </div>
        </div>
    );
}

export default ServiceItem;
