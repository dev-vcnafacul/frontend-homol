import FeatureList from "../../components/FeatureList";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Supporters from "../../components/Supporters";
import Map from "../../components/Map";
import ActionAreas from "../../components/ActionAreas";
import { about_us, actionAreas, features, footer, header, hero, supporters } from "./data";
import { map } from "leaflet";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

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
