import Hero from "../../components/Hero";
import data from "./data";

function Home() {
    return (
        <div>
            <Hero {...data.hero} />
        </div>
    );
}

export default Home;
