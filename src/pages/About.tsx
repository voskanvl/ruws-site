import Layout from "../components/Layout";
import Globals from "../globalConts";
import { Splide as SplideContainer, SplideSlide } from "@splidejs/react-splide";
import Splide from "@splidejs/splide/dist/types/index";
import GoldArchive from "../assets/images/icons/gold_achive.png";

function Contacts() {
    return (
        <Layout>
            <>
                <div className="breads">O нас</div>
                <section className="records">
                    {Globals.records.map(e => {
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
                            options={{ pagination: false, perPage: 5, perMove: 1, focus: 2 }}>
                            {[2022, 2021, 2020, 2019, 2018, 2017].map(e => (
                                <SplideSlide key={e}>{e}</SplideSlide>
                            ))}
                        </SplideContainer>
                    </div>
                </section>
            </>
        </Layout>
    );
}

export default Contacts;

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
