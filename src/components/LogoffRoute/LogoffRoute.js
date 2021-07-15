import { HOME_PATH } from "../../routing/paths";
import { logoff } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

function LogoffRoute() {
    const dispatch = useDispatch();
    dispatch(logoff());
    return <Redirect to={HOME_PATH} />;
}

export default LogoffRoute;
