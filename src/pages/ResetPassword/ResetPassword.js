import data from "../Home/data";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResetPasswordForm from "../../components/ResetPasswordForm";

import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

import { Wrap } from "./styles";

function ResetPassword() {
    return (
        <>
            <Header solid {...data.header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <ResetPasswordForm />
            </Wrap>
            <Footer {...data.footer} />
        </>
    );
}

export default ResetPassword;
