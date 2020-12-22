import Header from "../../components/Header";
import Hero from "../../components/Hero";
import data from "./data";

function Home() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
        </div>
    );
}

export default Home;
