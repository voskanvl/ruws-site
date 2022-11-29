import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useRef } from "react";
import Header from "../components/Header";
import Globals from "../globalConts";

function Contacts() {
    const ref = useRef(null);
    return (
        <>
            <Header />
            <>
                <div className="breads">Что вы можете получить?</div>
                <section>
                    <div style={{ marginTop: "80px" }}>
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
                                <SplideSlide key={e.id}></SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </section>
            </>
        </>
    );
}

export default Contacts;
