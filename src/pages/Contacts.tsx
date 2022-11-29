import React, { FC } from "react";
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
                            {Object.entries(Globals.common).map(([key, val]) => {
                                let Str: FC = () => <></>;

                                if (key === "address") Str = () => <>{val.data}</>;
                                if (key === "clock" && val.data.length)
                                    Str = () => (
                                        <>
                                            {(val.data as string[]).map(e => (
                                                <div>{e}</div>
                                            ))}
                                        </>
                                    );
                                if (key === "email")
                                    Str = () => <a href={"mailto:" + val.data}>{val.data}</a>;

                                if (key === "phones" && val.data.length)
                                    Str = () => (
                                        <>
                                            {(val.data as string[]).map(e => (
                                                <a href={"tel:" + e}>{e}</a>
                                            ))}
                                        </>
                                    );
                                return (
                                    <CommonDetails Img={() => <img src={val.img} />} Str={Str} />
                                );
                            })}
                        </div>
                        <Form />
                    </div>
                </section>
            </>
        </>
    );
}

export default Contacts;
