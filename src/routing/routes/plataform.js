import { Route } from "react-router-dom";
import { LOGIN_PATH, FORGOT_PASSWORD_PATH, REGISTER_PATH, RESET_PASSWORD_PATH } from "../paths";

import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";
import Register from "../../pages/Register";
import ResetPassword from "../../pages/ResetPassword";

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
            <Route path={RESET_PASSWORD_PATH}>
                <ResetPassword />
            </Route>
        </>
    );
}

export default Plataform;
