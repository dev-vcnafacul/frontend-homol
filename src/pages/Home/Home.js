import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Map from "../../components/Map";
import data from "./data";

function Home() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <Map {...data.map} />
        </div>
    );
}

export default Home;
