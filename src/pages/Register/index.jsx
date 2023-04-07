import { ReactComponent as TrianglePink } from "../../assets/icons/triangle-pink.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { footer, header } from "../Home/data";
import { Wrap } from "./styles";

function Register() {
    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <TrianglePink className="graphism triangle-pink" />
                <TriangleYellow className="graphism triangle-yellow" />
                <RegisterForm />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default Register;