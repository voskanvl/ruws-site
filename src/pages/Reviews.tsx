import { FC, useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Header from "../components/Header";

import ReviewImage from "../components/ReviewImage";
import reviews from "../globalData/reviews";
import Layout from "../components/Layout";

function Review() {
    const ref = useRef(null);
    const [details, setDetails] = useState<boolean>(false);

    return (
        <Layout>
            <div className="breads">Отзывы</div>
            <div style={{ margin: "80px auto 0", width: "75%" }}>
                <Splide
                    ref={ref}
                    className="review"
                    options={{
                        // type: "loop",
                        perPage: 3,
                        perMove: 1,
                        focus: "center",
                        start: 1,
                        arrows: true,
                        pagination: false,
                        breakpoints: {
                            1200: { perPage: 2, gap: "1rem" },
                            640: { gap: 0 },
                        },
                    }}>
                    {reviews.map(e => (
                        <SplideSlide key={e.id}>
                            <ReviewImage e={e} details={details} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <button
                onClick={() => setDetails(state => !state)}
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translate(-50%)",
                }}>
                {details ? "КОРОЧЕ" : "ПОДРОБНЕЕ"}
            </button>
        </Layout>
    );
}

export default Review;
