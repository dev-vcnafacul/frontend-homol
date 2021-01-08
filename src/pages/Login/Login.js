import data from "../Home/data";

import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";

import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

import { Wrap } from "./styles";

function Login() {
    return (
        <>
            <Header solid {...data.header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <LoginForm />
            </Wrap>
        </>
    );
}

export default Login;
