import Header from "../../components/Header";
import Hero from "../../components/Hero";
import News from "../../components/News";
import ActionAreas from "../../components/ActionAreas";
import data from "./data";

function Home() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <News {...data.news} />
            <ActionAreas {...data.actionAreas} />
        </div>
    );
}

export default Home;
