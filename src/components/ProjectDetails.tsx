import { CSSProperties, memo, useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { ProjectsData } from "../globalData";
import Connector from "./Connector/Connector";

// type ProjectDetailsProps = {
//     show: boolean;
//     left: number;
//     top: number;
//     name?: string;
// };

function ProjectDetails({ data }: { data: ProjectsData }) {
    const { show, left, top, name } = data;

    const [_, reload] = useState(0);

    // const [panelCoords, setPanelCoords] = useState({ top: 0, left: 0 });
    // const panelCoords = useRef({ top: 0, left: 0 });

    const ref = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement>();

    const centerContainerX = (container.current && container.current.clientWidth / 2) || 0;
    const centerContainerY = (container.current && container.current.clientHeight / 2) || 0;

    // let containerClientRect = container.current && container.current.getBoundingClientRect();
    // let panelClientRect = ref.current && ref.current.getBoundingClientRect();

    //выступает ли панель за пределы контейнера по верхней границе
    //если значение положительное, то панель выступает
    // const outTop = containerClientRect.top - panelClientRect.top;

    //аналогично по нижней границе
    //если значение положительное, то панель выступает
    // const outBottom = panelClientRect.top - containerClientRect.top;

    let shiftX = left > centerContainerX ? -100 : 0;
    let shiftY = top > centerContainerY ? -100 : 0;

    useEffect(() => {
        if (ref.current) {
            container.current = ref.current && (ref.current.closest(".container") as HTMLElement);
        }
    }, [ref.current]);

    return (
        <div
            ref={ref}
            className="panel"
            data-show={show}
            style={
                {
                    "left": 0,
                    "top": 0,
                    "--shiftx": shiftX + "%",
                    "--shifty": shiftY + "%",
                } as CSSProperties
            }>
            {name}
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
                        src={`https://picsum.photos/id/${(200 + Math.random() * 100) | 0}/300/200`}
                        alt="Image 1"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className="slide-img"
                        src={`https://picsum.photos/id/${(200 + Math.random() * 100) | 0}/300/200`}
                        alt="Image 2"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className="slide-img"
                        src={`https://picsum.photos/id/${(200 + Math.random() * 100) | 0}/300/200`}
                        alt="Image 2"
                    />
                </SplideSlide>
            </Splide>
            <div className="panel__container">
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
