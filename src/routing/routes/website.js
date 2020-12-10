import { Route } from "react-router-dom";
import { HOME_PATH } from "../paths";

import Home from "../../pages/Home";

function Website() {
    return (
        <>
            <Route exact path={HOME_PATH}>
                <Home />
            </Route>
        </>
    );
}

export default Website;
