import Layout from "../components/Layout";
import { records, recordsCalendar } from "../globalData";
import { Splide as SplideContainer, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide/dist/types/index";

import "@splidejs/react-splide/css/core";
import { useCallback, useRef, useState } from "react";
import type { recordsPoint } from "../globalData";

const focus = 3;

function About() {
    const ref = useRef();

    const getRecordsByIndex = (x: number) => {
        return recordsCalendar.find(e => e.id === x);
    };

    const [yearData, setYearData] = useState<recordsPoint[]>(
        getRecordsByIndex(focus)?.records || [],
    );

    const handleSlide = useCallback((idx: number) => {
        if (ref.current === undefined) return;
        ref.current.go(idx);
    }, []);

    const handleMoved = (index: number) => {
        const data = getRecordsByIndex(index);
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
                <div className="about__title">Наши награды</div>
                <section className="records-calendar">
                    <div style={{ marginTop: 80, marginLeft: 156, width: "25%" }}>
                        <SplideContainer
                            ref={ref}
                            onMoved={(x: Splide) => handleMoved(x.index)}
                            options={{
                                type: "loop",
                                pagination: false,
                                perPage: 5,
                                perMove: 1,
                                focus,
                            }}>
                            {recordsCalendar.map((e, idx) => (
                                <SplideSlide
                                    key={e.id}
                                    className="calendar"
                                    onClick={e => handleSlide(idx)}>
                                    {e.year}
                                </SplideSlide>
                            ))}
                        </SplideContainer>
                    </div>
                    <ul className="record-list">
                        {yearData.length &&
                            yearData.map(e => {
                                return (
                                    <li className="record">
                                        <img src={e.img} alt="golden archive" />
                                        <strong>{e.source}</strong>
                                        <span>{e.top}</span>
                                        <span>{e.nomination}</span>
                                    </li>
                                );
                            })}
                    </ul>
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
