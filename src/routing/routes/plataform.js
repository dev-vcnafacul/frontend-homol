import { Route } from "react-router-dom";
import { LOGIN_PATH } from "../paths";

import Login from "../../pages/Login";

function Plataform() {
    return (
        <>
            <Route exact path={LOGIN_PATH}>
                <Login />
            </Route>
        </>
    );
}

export default Plataform;
