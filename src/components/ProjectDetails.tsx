import { CSSProperties, memo, useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { ProjectsData } from "../globalData";

type ProjectDetailsProps = {
    show: boolean;
    left: number;
    top: number;
    name?: string;
};

function ProjectDetails({ data }: { data: ProjectsData }) {
    const { show, left, top, name } = data;

    const ref = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement>();

    useEffect(() => {
        if (ref.current)
            container.current = ref.current && (ref.current.closest(".container") as HTMLElement);
    }, [ref.current]);

    const centerX = (container.current && container.current.clientWidth / 2) || 0;
    const centerY = (container.current && container.current.clientHeight / 2) || 0;

    const shiftX = left > centerX ? -100 : 0;
    const shiftY = top > centerY ? -100 : 0;

    return (
        <div
            ref={ref}
            className="panel"
            data-show={show}
            style={
                {
                    "left": "0px",
                    "top": "0px",
                    "--shiftx": shiftX + "%",
                    "--shifty": shiftY + "%",
                } as CSSProperties
            }>
            {name}
            <div>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        perPage: 3,
                        perMove: 1,
                        type: "slide",
                        focus: "center",
                        start: 1,
                        arrows: true,
                    }}>
                    <SplideSlide>
                        <img
                            className="slide-img"
                            src={`https://picsum.photos/id/${
                                (200 + Math.random() * 100) | 0
                            }/300/200`}
                            alt="Image 1"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            className="slide-img"
                            src={`https://picsum.photos/id/${
                                (200 + Math.random() * 100) | 0
                            }/300/200`}
                            alt="Image 2"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            className="slide-img"
                            src={`https://picsum.photos/id/${
                                (200 + Math.random() * 100) | 0
                            }/300/200`}
                            alt="Image 2"
                        />
                    </SplideSlide>
                </Splide>
                {/* <img src={`https://picsum.photos/id/${(200 + Math.random() * 100) | 0}/200/300`} /> */}
                <div className="panel__title">О компании</div>
                <div className="panel__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel faucibus
                    lorem. Cras tincidunt vitae augue eget posuere. Nunc non quam fringilla nisl
                    tempus malesuada. Nulla lorem dolor, egestas ac nunc non, facilisis euismod
                    lectus. Cras non odio vitae orci commodo hendrerit. Pellentesque in interdum
                    nulla, sed convallis nibh. Vestibulum vitae ipsum eget orci congue tristique.
                    Vivamus venenatis ex in nibh mollis.
                </div>
                <div className="panel__title">Движок</div>
                <div className="panel__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel faucibus
                    lorem. Cras tincidunt vitae augue eget posuere. Nunc non quam fringilla nisl
                    tempus malesuada. Nulla lorem dolor, egestas ac nunc non, facilisis euismod
                    lectus. Cras non odio vitae orci commodo hendrerit. Pellentesque in interdum
                    nulla, sed convallis nibh. Vestibulum vitae ipsum eget orci congue tristique.
                    Vivamus venenatis ex in nibh mollis.
                </div>
                <div className="panel__title">Сайт</div>
                <a href="#">www.ritpark.ru</a>
            </div>
        </div>
    );
}

export default memo(ProjectDetails);
