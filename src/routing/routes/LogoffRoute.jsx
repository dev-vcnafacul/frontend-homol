import { logoff } from "../../store/actions/auth/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { HOME_PATH } from "routing/paths";

function LogoffRoute() {
    const isLogged = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate(HOME_PATH);
            dispatch(logoff());
        }
    }, [isLogged, navigate, dispatch]);

    return <div />;
}

export default LogoffRoute;
