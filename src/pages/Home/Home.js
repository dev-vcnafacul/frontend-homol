import AboutUs from "../../components/AboutUs";
import data from "./data";

function Home() {
    return (
        <div>
            <AboutUs {...data.about_us} />
        </div>
    );
}

export default Home;
