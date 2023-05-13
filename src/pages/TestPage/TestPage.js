import { footer, header } from "../Home/data";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Test from "../../components/Test";

import { Wrap } from "./styles";

function TestPage() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <Test />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default TestPage;
