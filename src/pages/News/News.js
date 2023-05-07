import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Quote from "../../components/Quote";
import data from "../Home/data";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function News() {
    const docs = [{ uri: "https://drive.google.com/file/d/1KvXELaR2ZJ1oeQ6Xn0UdkMqurYVca6wE/view?usp=sharing" }];
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            <Footer {...data.footer} />
        </div>
    );
}
export default News;
