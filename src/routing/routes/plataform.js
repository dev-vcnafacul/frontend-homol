import { Route } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import { LOGIN_PATH, FORGOT_PASSWORD_PATH, REGISTER_PATH, RESET_PASSWORD_PATH, ACCOUNT_PATH } from "../paths";

import Login from "pages/Login";
import ForgotPassword from "pages/ForgotPassword";
import Register from "pages/Register";
import ResetPassword from "pages/ResetPassword";
import Account from "pages/Account";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthByLocalStorage } from "../../store/actions/auth";

function Plataform() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        if (!token) {
            dispatch(updateAuthByLocalStorage());
        }
    });
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
            <PrivateRoute path={ACCOUNT_PATH}>
                <Account />
            </PrivateRoute>
        </>
    );
}

export default Plataform;
