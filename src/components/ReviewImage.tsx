import { FC } from "react";
import style from "./ReviewImage.module.sass";
import star from "../assets/images/star.png";
import { Transition, animated } from "react-spring";

type ReviewImageProp = {
    e: {
        id: number;
        name: string;
        img: string;
        mark: number;
        comment: string;
    };
    details: boolean;
};

const ReviewImage: FC<ReviewImageProp> = ({ e, details }) => {
    return (
        <div style={{ position: "relative", height: "500px", width: "100%", marginLeft: "-100px" }}>
            <div
                className={
                    details
                        ? [style.reviewImg__container, style.reviewImg__container_hidden].join(" ")
                        : style.reviewImg__container
                }>
                <div className={style.reviewImg}>
                    <img src={e.img} />
                </div>
                <div className={style.reviewImg__name}>{e.name}</div>
            </div>

            <div
                className={
                    details
                        ? style.reviewImg__container
                        : [style.reviewImg__container, style.reviewImg__container_hidden].join(" ")
                }>
                <div className={style.reviewImg__name}>{e.name}</div>
                <div className={style.reviewImg__stars}>
                    {Array(e.mark)
                        .fill(null)
                        .map((_, idx) => (
                            <img src={star} alt="star" key={idx} />
                        ))}
                </div>
                <div className={style.reviewImg__comment}>{e.comment}</div>
            </div>
        </div>
    );
};

export default ReviewImage;
