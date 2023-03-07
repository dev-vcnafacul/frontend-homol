import { Route } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import LogoffRoute from "../../components/LogoffRoute";
import {
    LOGIN_PATH,
    FORGOT_PASSWORD_PATH,
    REGISTER_PATH,
    RESET_PASSWORD_PATH,
    ACCOUNT_PATH,
    LOGOFF_PATH,
    FORM_GEOLOCATION,
    DASHBOARD_TEACHER,
    DASHBOARD_GEOLOCATION,
} from "../paths";

import Login from "pages/Login";
import ForgotPassword from "pages/ForgotPassword";
import Register from "pages/Register";
import ResetPassword from "pages/ResetPassword";
import Account from "pages/Account";
import FormGeolocation from "pages/FormGeolocation";
import TeacherDashboard from "pages/TeacherDashboard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthByLocalStorage } from "../../store/actions/auth";
import DashGeolocation from "pages/DashGeolocation";

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
            <PrivateRoute path={ACCOUNT_PATH}>
                <Account />
            </PrivateRoute>
            <Route path={DASHBOARD_TEACHER}>
                <TeacherDashboard />
            </Route>
            <Route path={DASHBOARD_GEOLOCATION}>
                <DashGeolocation />
            </Route>

            <Route exact path={REGISTER_PATH}>
                <Register />
            </Route>
            <Route exact path={LOGIN_PATH}>
                <Login />
            </Route>
            <Route exact path={FORGOT_PASSWORD_PATH}>
                <ForgotPassword />
            </Route>
            <Route path={RESET_PASSWORD_PATH}>
                <ResetPassword />
            </Route>
            <Route path={LOGOFF_PATH}>
                <LogoffRoute />
            </Route>
            <Route path={FORM_GEOLOCATION}>
                <FormGeolocation />
            </Route>
        </>
    );
}

export default Plataform;
