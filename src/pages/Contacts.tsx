import React from "react";
import Header from "../components/Header";
import Globals from "../globalConts";
import styles from "./Contacts.module.sass";
import Map from "../assets/images/map.png";
import CommonDetails from "../components/CommonDetails";
import Form from "../components/Form";

function Contacts() {
    return (
        <>
            <Header />
            <>
                <div className="breads">Контакты</div>
                <section className={styles.contacts}>
                    <div className={styles.contacts__map}>
                        <img src={Map} alt="map" />
                    </div>
                    <div className={styles.contacts__data}>
                        <div className={styles.contacts__details}>
                            {Object.values(Globals.common).map(val => (
                                <CommonDetails Img={() => <img src={val.img} />} str={val.data} />
                            ))}
                        </div>
                        <Form />
                    </div>
                </section>
            </>
        </>
    );
}

export default Contacts;
