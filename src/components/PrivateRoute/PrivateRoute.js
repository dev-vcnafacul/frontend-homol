import { HOME_PATH } from "../../routing/paths";

import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
    const isLogged = useSelector((state) => state.auth.token);

    return <Route {...rest}>{!isLogged ? <Redirect to={HOME_PATH} /> : children}</Route>;
}

export default PrivateRoute;
