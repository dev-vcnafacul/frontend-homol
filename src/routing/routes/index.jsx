import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { updateAuthByLocalStorage } from "store/actions/auth";
import { PlatformRoutes } from "./PlatformRoutes";
import { WebsiteRoutes } from "./WebsiteRoutes";

export function Router() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (!token) {
            dispatch(updateAuthByLocalStorage());
        }
    });

    return <BrowserRouter>{!token ? <WebsiteRoutes /> : <PlatformRoutes />}</BrowserRouter>;
}
