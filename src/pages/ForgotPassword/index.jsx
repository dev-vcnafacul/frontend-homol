import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import Footer from "../../components/Footer";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import Header from "../../components/Header";
import { footer, header } from "../Home/data";
import { Wrap } from "./styles";

function ForgotPassword() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <ForgotPasswordForm />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default ForgotPassword;
