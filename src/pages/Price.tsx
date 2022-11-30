import { Splide as SplideContainer, SplideSlide } from "@splidejs/react-splide";
import { FC, useCallback, useRef, useState } from "react";
import Header from "../components/Header";
import Globals from "../globalConts";
import Splide from "@splidejs/splide/dist/types/index";
import styles from "./Price.module.sass";
import chevron from "../assets/images/icons/black/chevron.svg";
import wallet from "../assets/images/icons/wallet.svg";
import wallClock from "../assets/images/icons/wall-clock.svg";
import { useTransition, animated } from "react-spring";
import Layout from "../components/Layout";

interface StatePrice {
    product?: number;
    platform?: number;
}

function Price() {
    const ref = useRef(null);
    const [state, setState] = useState<StatePrice>({ product: 1, platform: undefined });

    const handleClickProduct = (idx: number) => () => {
        if (ref.current) (ref.current as unknown as Splide).go(idx);
        setState(val => ({ ...val, product: idx }));
    };
    const handleClickPlatforms = (idx: number) => () => {
        setState(val => ({ ...val, platform: idx }));
    };

    const getPrice = useCallback(() => {
        return Globals.price
            .find(e => e.product === state.product)
            ?.platform.find(e => e.platforms === state.platform);
    }, [state]);

    const getPlatform = useCallback(() => {
        return Globals.platforms.find(e => e.id === state.platform);
    }, [state]);

    const getProduct = useCallback(() => {
        return Globals.products.find(e => e.id === state.product);
    }, [state]);

    const handleMoved = (x: Splide) => {
        const idx = Globals.products.find(e => e.id === x.index)?.id;
        if (idx === undefined) return;
        setState(val => ({ ...val, product: idx }));
    };

    return (
        <Layout>
            <>
                <div className="breads">Что вы можете получить?</div>

                <section>
                    <div style={{ margin: "80px auto 0", width: "75%" }}>
                        <SplideContainer
                            ref={ref}
                            options={{
                                // type: "loop",
                                perPage: 3,
                                perMove: 1,
                                focus: "center",
                                start: 1,
                                arrows: true,
                                pagination: false,
                            }}
                            onMoved={handleMoved}>
                            {Globals.products.map((e, idx) => (
                                <SplideSlide
                                    key={e.id}
                                    onClick={handleClickProduct(e.id)}
                                    style={{ fontSize: "30px" }}>
                                    <span style={{ height: 40 }}>{e.name}</span>
                                </SplideSlide>
                            ))}
                        </SplideContainer>
                    </div>
                </section>

                <section className={styles.price}>
                    <div className={styles.price__platforms}>
                        <div className={styles.price__title}>Ваш сайт на любой CMS / Framework</div>
                        <ul className={styles.price__list}>
                            {Globals.platforms.map(e => (
                                <li
                                    className={styles.price__platformsItem}
                                    key={e.id}
                                    onClick={handleClickPlatforms(e.id)}>
                                    <span>{e.name}</span>

                                    <span>
                                        <img
                                            src={chevron}
                                            alt="chevron"
                                            style={{
                                                transition: "transform .5s",
                                                transform: `rotate(${
                                                    state.platform === e.id ? -90 : 0
                                                }deg)`,
                                            }}
                                        />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.price__data}>
                        <div className={styles.price__content}>
                            <h3 className={styles.price__platformTitle}>{getPlatform()?.title}</h3>

                            <div className={styles.price__platformCaption}>
                                {getPlatform()?.text}
                            </div>

                            <div className={styles.price__cost}>
                                {state.platform !== undefined && state.product !== undefined && (
                                    <img src={wallet} alt="wallet" />
                                )}
                                <span>{getPrice()?.cost}</span>
                            </div>

                            <div className={styles.price__time}>
                                {state.platform !== undefined && state.product !== undefined && (
                                    <img src={wallClock} alt="wall-clock" />
                                )}
                                <span>{getPrice()?.time}</span>
                            </div>
                        </div>
                        <div className="certificates">
                            <SplideContainer options={{ type: "fade", arrows: false }}>
                                {getPlatform()?.certificates.map(e => (
                                    <SplideSlide key={e}>
                                        <img
                                            src={e}
                                            key={e}
                                            alt="certificate"
                                            style={{ width: "100%" }}
                                        />
                                    </SplideSlide>
                                ))}
                            </SplideContainer>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
}

export default Price;
