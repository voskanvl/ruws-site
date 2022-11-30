import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Splide as SplideContainer, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide/dist/types/index";
import Globals from "../globalConts";
import ServiceItem from "../components/ServiceItem";
import Layout from "../components/Layout";

function Services() {
    const ref = useRef(null);
    const [active, setActive] = useState(1);
    const [splideInstance, setSplideInstance] = useState<Splide | null>(null);

    const handleMoved: (splide: Splide, index: number, prev: number, dest: number) => void = (
        _,
        index,
    ) => {
        setActive(index);
    };

    useEffect(() => {
        ref.current && setSplideInstance(ref.current);
        console.log("🚀 ~ ref.current", ref.current);
    }, [ref.current]);

    const handleClick = (idx: number) => () => {
        console.log(splideInstance, ref.current);
        splideInstance && splideInstance.go(idx);
    };

    return (
        <Layout>
            <Header />
            <>
                <div className="breads">Что мы предлагаем</div>
                <div style={{ margin: "80px auto 0", width: "75%" }} className="service">
                    <SplideContainer
                        onMoved={handleMoved}
                        ref={ref}
                        options={{
                            perPage: 3,
                            perMove: 1,
                            focus: "center",
                            start: 1,
                            arrows: true,
                            pagination: false,
                        }}
                        style={{ cursor: "pointer" }}>
                        {Globals.services.map((e, idx) => (
                            <SplideSlide key={e.id} onClick={handleClick(idx)}>
                                <ServiceItem e={e} active={idx === active} />
                            </SplideSlide>
                        ))}
                    </SplideContainer>
                </div>
                <h2 className="title">Наши партнеры</h2>
                <ul className="partners">
                    {Globals.partners.map(e => (
                        <li key={e.name}>
                            <a href={e.href}>
                                <img src={e.img} alt={e.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        </Layout>
    );
}

export default Services;
