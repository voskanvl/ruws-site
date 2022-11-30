import { FC, useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Header from "../components/Header";

import ReviewImage from "../components/ReviewImage";
import Globals from "../globalConts";
import Layout from "../components/Layout";

function Review() {
    const ref = useRef(null);
    const [details, setDetails] = useState<boolean>(false);
    console.log("🚀 ~ ref", ref.current);

    useEffect(() => {
        ref.current && console.log("🚀 ~ ref", ref.current);
    }, [ref.current]);

    return (
        <Layout>
            <div className="breads">Отзывы</div>
            <div style={{ margin: "80px auto 0", width: "75%" }}>
                <Splide
                    ref={ref}
                    options={{
                        // type: "loop",
                        perPage: 3,
                        perMove: 1,
                        focus: "center",
                        start: 1,
                        arrows: true,
                        pagination: false,
                    }}>
                    {Globals.reviews.map(e => (
                        <SplideSlide key={e.id}>
                            <ReviewImage e={e} details={details} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <button onClick={() => setDetails(state => !state)} style={{ marginTop: "29px" }}>
                {details ? "КОРОЧЕ" : "ПОДРОБНЕЕ"}
            </button>
        </Layout>
    );
}

export default Review;
