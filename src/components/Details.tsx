import { FC } from "react";
import CommonDetails from "../components/CommonDetails";
import { common } from "../globalData";
import styles from "./Details.module.sass";

function Details() {
    return (
        <div className={styles.details}>
            {Object.entries(common).map(([key, val]) => {
                let Str: FC = () => <></>;

                if (key === "address") Str = () => <>{val.data}</>;
                if (key === "clock" && val.data.length)
                    Str = () => (
                        <>
                            {(val.data as string[]).map(e => (
                                <div key={e}>{e}</div>
                            ))}
                        </>
                    );
                if (key === "email") Str = () => <a href={"mailto:" + val.data}>{val.data}</a>;

                if (key === "phones" && val.data.length)
                    Str = () => (
                        <>
                            {(val.data as string[]).map(e => (
                                <a href={"tel:" + e} key={e}>
                                    {e}
                                </a>
                            ))}
                        </>
                    );
                return <CommonDetails Img={() => <img src={val.img} />} Str={Str} key={key} />;
            })}
        </div>
    );
}

export default Details;
