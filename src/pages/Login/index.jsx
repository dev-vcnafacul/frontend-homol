import Footer from "components/Footer";
import Header from "components/Header";
import LoginForm from "components/LoginForm";
import { footer, header } from "pages/Home/data";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "routing/paths";
import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import { Wrap } from "./styles";

function Login() {
    const token = useSelector((state) => state.auth.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(DASHBOARD);
        }
    }, [token, navigate]);

    return (
        <>
            <Header solid {...header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <LoginForm />
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default Login;
