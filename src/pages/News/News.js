import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import data from "../Home/data";
import { BodyIFrame, Iframe } from "./styles";

import pdf from "assets/docs/Texto_apadrinhamento_2016.pdf";

function News() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <BodyIFrame>
                <Iframe src={pdf + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH&pagemode=thumbs"} />
            </BodyIFrame>
            <Footer {...data.footer} />
        </div>
    );
}
export default News;
