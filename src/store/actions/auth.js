import { AUTH_SUCCESS, REGISTER_SUCCESS } from "./auth.types";
import { HOME_PATH } from "../../routing/paths";
import { API_URL } from "../../constants";

export function doAuth(email, password) {
    return async (dispatch) => {
        const data = { email, password };
        const response = await fetch(`${API_URL}/session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.status === 401) {
            throw new Error("User not found");
        } else {
            const responseJSON = await response.json();
            dispatch({ type: AUTH_SUCCESS, payload: responseJSON });
        }
    };
}

export function register(email, password, history) {
    return async (dispatch) => {
        const data = { email, password };
        //Fake temporary api: https://reqres.in/
        const response = await fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.status === 400) {
            throw new Error("Registration Error");
        } else {
            const responseJSON = await response.json();
            dispatch({ type: REGISTER_SUCCESS, payload: responseJSON });
            history.push({ pathname: HOME_PATH });
        }
    };
}
