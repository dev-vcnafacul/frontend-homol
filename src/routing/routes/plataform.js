import { Route } from "react-router-dom";
import { LOGIN_PATH, FORGOT_PASSWORD_PATH, REGISTER_PATH } from "../paths";

import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";
import Register from "../../pages/Register";

function Plataform() {
    return (
        <>
            <Route exact path={LOGIN_PATH}>
                <Login />
            </Route>
            <Route exact path={FORGOT_PASSWORD_PATH}>
                <ForgotPassword />
            </Route>
            <Route exact path={REGISTER_PATH}>
                <Register />
            </Route>
        </>
    );
}

export default Plataform;
