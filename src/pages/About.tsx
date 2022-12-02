import Layout from "../components/Layout";
import { records, recordsCalendar } from "../globalData";
import { Splide as SplideContainer, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide/dist/types/index";

import "@splidejs/react-splide/css/core";
import { useState } from "react";

function About() {
    const [yearData, setYearData] = useState<any[]>([]);

    const getRecordsByIndex = (x: number) => {
        return recordsCalendar.find(e => e.id === x);
    };

    const handleMoved = (x: Splide) => {
        const data = getRecordsByIndex(x.index);
        if (!data || !data.records) return;
        setYearData(data.records);
    };
    return (
        <Layout>
            <>
                <div className="breads">O нас</div>
                <section className="records">
                    {records.map(e => {
                        return (
                            <div className="records__item" key={e.id}>
                                <div className="records__val">{e.value}</div>
                                <div className="records__name">{e.name}</div>
                            </div>
                        );
                    })}
                </section>
                <section className="records-calendar">
                    <div style={{ marginTop: 80, width: "50%" }}>
                        <SplideContainer
                            onMoved={handleMoved}
                            options={{ pagination: false, perPage: 5, perMove: 1, focus: 2 }}>
                            {[2022, 2021, 2020, 2019, 2018, 2017].map(e => (
                                <SplideSlide key={e}>{e}</SplideSlide>
                            ))}
                        </SplideContainer>
                    </div>
                    <div></div>
                </section>
            </>
        </Layout>
    );
}

export default About;

{
    /* <li className="record">
    <img src={GoldArchive} alt="golden archive" />
    <strong>Рейтинг Рунета</strong>
    <span>Первое место</span>
    <span>
        {" "}
        Рейтинг разработчиков интернет-магазинов Пензы
        нижнего ценового сегмента
    </span>
</li> */
}
