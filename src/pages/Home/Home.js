import AboutUs from "../../components/AboutUs";
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
        </div>
    );
}

export default Home;
