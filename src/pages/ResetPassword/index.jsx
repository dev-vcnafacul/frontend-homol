import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import { footer, header } from "../Home/data";
import { Wrap } from "./styles";

function ResetPassword() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <ResetPasswordForm />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default ResetPassword;
