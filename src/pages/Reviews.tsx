import { FC, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Header from "../components/Header";

import ReviewImage from "../components/ReviewImage";
import Globals from "../globalConts";

const Review: FC<{}> = () => {
    const ref = useRef(null);
    const [details, setDetails] = useState<boolean>(false);
    console.log("🚀 ~ ref", ref.current);

    return (
        <>
            <Header />
            <div style={{ marginTop: "80px" }}>
                <Splide
                    ref={ref}
                    options={{
                        type: "slide",
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
            <button onClick={() => setDetails(state => !state)} style={{ marginTop: "89px" }}>
                {details ? "КОРОЧЕ" : "ПОДРОБНЕЕ"}
            </button>
        </>
    );
};

export default Review;
