import FeatureList from "../../components/FeatureList";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Supporters from "../../components/Supporters";
import Map from "../../components/Map";
import News from "../../components/News";
import ActionAreas from "../../components/ActionAreas";
import CookieBar from "../../components/CookieBar";
import data from "./data";

function Home() {
    return (
        <div>
            <CookieBar {...data.lgpd} />
            <Header {...data.header} />
            <Hero {...data.hero} />
            <AboutUs {...data.about_us} />
            <News {...data.news} />
            <FeatureList {...data.features} />
            <ActionAreas {...data.actionAreas} />
            <Supporters {...data.supporters} />
            <Map {...data.map} />
            <Footer {...data.footer} />
        </div>
    );
}
export default Home;
