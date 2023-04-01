import { map } from "leaflet";
import { ThemeProvider } from "styled-components";
import AboutUs from "../../components/AboutUs";
import ActionAreas from "../../components/ActionAreas";
import FeatureList from "../../components/FeatureList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Map from "../../components/Map";
import Supporters from "../../components/Supporters";
import { theme } from "../../styles/theme";
import { about_us, actionAreas, features, footer, header, hero, supporters } from "./data";

const ThemeBody = (props) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

function Home() {
    return (
        <ThemeBody>
            <Header {...header} />
            <Hero {...hero} />
            <AboutUs {...about_us} />
            <FeatureList {...features} />
            <ActionAreas {...actionAreas} />
            <Supporters {...supporters} />
            <Map {...map} />
            <Footer {...footer} />
        </ThemeBody>
    );
}
export default Home;
