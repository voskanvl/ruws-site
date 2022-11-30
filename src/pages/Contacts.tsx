import React, { FC } from "react";
import Header from "../components/Header";

import styles from "./Contacts.module.sass";
import Map from "../assets/images/map.png";

import Form from "../components/Form";
import Details from "../components/Details";
import Layout from "../components/Layout";

function Contacts() {
    return (
        <Layout>
            <>
                <div className="breads">Контакты</div>
                <section className={styles.contacts}>
                    <div className={styles.contacts__map}>
                        <img src={Map} alt="map" />
                    </div>
                    <div className={styles.contacts__data}>
                        <Details />
                        <Form />
                    </div>
                </section>
            </>
        </Layout>
    );
}

export default Contacts;
