import Login from "pages/Login";
import Register from "pages/Register";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from "../paths";

export function WebsiteRoutes() {
    return (
        <Routes>
            <Route exact path={HOME_PATH} element={<Home />} />
            <Route path={REGISTER_PATH} element={<Register />} />
            <Route path={LOGIN_PATH} element={<Login />} />
        </Routes>
    );
}
