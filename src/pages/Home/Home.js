import FeatureList from "../../components/FeatureList";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Map from "../../components/Map";
import News from "../../components/News";
import ActionAreas from "../../components/ActionAreas";
import data from "./data";

function Home() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <AboutUs {...data.about_us} />
            <News {...data.news} />
            <FeatureList {...data.features} />
            <ActionAreas {...data.actionAreas} />
            <Map {...data.map} />
            <Footer {...data.footer} />
        </div>
    );
}
export default Home;
