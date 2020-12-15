import Hero from "../../components/Hero";
import data from "./data.json";

function Home() {
    return (
        <div>
            <Hero {...data.hero} />
        </div>
    );
}

export default Home;
