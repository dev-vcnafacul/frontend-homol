import data from "../Home/data";

import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";

import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

import { Wrap } from "./styles";

function Register() {
    return (
        <>
            <Header solid {...data.header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <RegisterForm />
            </Wrap>
        </>
    );
}

export default Register;
