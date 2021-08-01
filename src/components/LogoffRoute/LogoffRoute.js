import { HOME_PATH } from "../../routing/paths";
import { logoff } from "../../store/actions/auth";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function LogoffRoute() {
    const isLogged = useSelector((state) => state);
    const dispatch = useDispatch();
    if (isLogged) {
        dispatch(logoff());
    }
    return (
        <Route>
            <Redirect to={HOME_PATH} />
        </Route>
    );
}

export default LogoffRoute;
