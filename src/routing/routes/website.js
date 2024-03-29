import { Route } from "react-router-dom";
import { HOME_PATH } from "../paths";

import Home from "../../pages/Home";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthByLocalStorage } from "../../store/actions/auth";

function Website() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        if (!token) {
            dispatch(updateAuthByLocalStorage());
        }
    });
    return (
        <>
            <Route exact path={HOME_PATH}>
                <Home />
            </Route>
        </>
    );
}

export default Website;
