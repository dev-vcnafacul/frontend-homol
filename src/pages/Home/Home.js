import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import News from "../../components/News";
import data from "./data";

function Home() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <AboutUs {...data.about_us} />
            <News {...data.news} />
            <Footer {...data.footer} />
        </div>
    );
}

export default Home;
