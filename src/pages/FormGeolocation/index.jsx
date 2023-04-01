import { footer, header } from "../Home/data";

import { ReactComponent as TrianglePink } from "../../assets/icons/triangle-pink.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import Footer from "../../components/Footer";
import FormGeolocationComponent from "../../components/FormGeolocationComponent";
import Header from "../../components/Header";
import { Wrap } from "./styles";

function FormGeolocation() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <TrianglePink className="graphism triangle-pink" />
                <TriangleYellow className="graphism triangle-yellow" />
                <FormGeolocationComponent />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default FormGeolocation;
