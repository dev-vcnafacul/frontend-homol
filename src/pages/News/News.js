import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../Home/data";

function News() {
    return (
        <div>
            <Header {...data.header} />
            <h1>Esta aqui é a página de novidades #deletardepois</h1>
            <Footer {...data.footer} />
        </div>
    );
}
export default News;
