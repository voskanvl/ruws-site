import Layout from "../components/Layout";
import image404 from "../assets/svg/404.svg";
import { CSSProperties } from "react";

const Page404 = () => (
    <Layout>
        <div
            style={
                {
                    display: "grid",
                    placeItems: "center",
                } as CSSProperties
            }>
            <img src={image404} alt="404" style={{ width: "50%" }} />
            <p style={{ fontSize: "24px", fontWeight: 800 }}>
                КАЖЕТСЯ ЧТО-ТО ПОШЛО НЕ ТАК! СТРАНИЦА, КОТОРУЮ ВЫ ИЩИТЕ НЕ СУЩЕСТВУЕТ.
            </p>
        </div>
    </Layout>
);
export default Page404;
