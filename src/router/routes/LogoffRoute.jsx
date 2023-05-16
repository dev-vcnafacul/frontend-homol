import { HOME_PATH } from "../paths";
import { logoff } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

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
