import { footer, header } from "pages/Home/data";
import { ACCOUNT_PATH } from "routing/paths";

import LoginForm from "components/LoginForm";
import Header from "components/Header";
import Footer from "components/Footer";
import { Redirect } from "react-router";

import { useSelector } from "react-redux";

import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

import { Wrap } from "./styles";

function Login() {
    const isLogged = useSelector((state) => state.auth.token);

    return (
        <>
            {isLogged ? (
                <Redirect to={ACCOUNT_PATH} />
            ) : (
                <>
                    <Header solid {...header} />
                    <Wrap>
                        <TriangleGreen className="graphism triangle-green" />
                        <TriangleYellow className="graphism triangle-yellow" />
                        <LoginForm />
                    </Wrap>
                    <Footer {...footer} />
                </>
            )}
        </>
    );
}

export default Login;
