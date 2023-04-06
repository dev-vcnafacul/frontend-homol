import { Route, Routes } from "react-router-dom";
import LogoffRoute from "./LogoffRoute";

import Account from "pages/Account";
import Dashboard from "pages/Dashboard";
import DashGeolocation from "pages/DashGeolocation";
import ForgotPassword from "pages/ForgotPassword";
import FormGeolocation from "pages/FormGeolocation";
import Home from "pages/Home";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";

import {
    ACCOUNT_PATH,
    DASHBOARD,
    DASHBOARD_GEOLOCATION,
    FORGOT_PASSWORD_PATH,
    FORM_GEOLOCATION,
    HOME_PATH,
    LOGIN_PATH,
    LOGOFF_PATH,
    RESET_PASSWORD_PATH,
} from "../paths";
import DashBoardDefault from "components/DashBoardDefault";

export function PlatformRoutes() {
    return (
        <Routes>
            <Route exact path={HOME_PATH} element={<Home />} />
            <Route path={ACCOUNT_PATH} element={<Account />} />
            <Route path={LOGIN_PATH} element={<Login />} />
            <Route path={LOGOFF_PATH} element={<LogoffRoute />} />
            <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />
            <Route path={RESET_PASSWORD_PATH} element={<ResetPassword />} />
            <Route path={FORM_GEOLOCATION} element={<FormGeolocation />} />
            <Route
                path={DASHBOARD}
                element={
                    <DashBoardDefault>
                        <Dashboard />
                    </DashBoardDefault>
                }
            />
            <Route
                path={DASHBOARD_GEOLOCATION}
                element={
                    <DashBoardDefault>
                        <DashGeolocation />
                    </DashBoardDefault>
                }
            />
        </Routes>
    );
}
