import FeatureList from "../../components/FeatureList";
import data from "./data";

function Home() {
    return (
        <div>
            <FeatureList {...data.features} />
        </div>
    );
}
export default Home;
