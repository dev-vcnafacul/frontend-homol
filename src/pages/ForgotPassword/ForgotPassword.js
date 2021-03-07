import data from "../Home/data";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

import { Wrap } from "./styles";

function ForgotPassword() {
    return (
        <>
            <Header solid {...data.header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <ForgotPasswordForm />
            </Wrap>
            <Footer {...data.footer} />
        </>
    );
}

export default ForgotPassword;
