import { AUTH_SUCCESS } from "./auth.types";

export function doAuth(email, password) {
    return async (dispatch) => {
        const data = { email, password };
        //Fake temporary api: https://reqres.in/
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.status === 400) {
            throw new Error("User not found");
        } else {
            const responseJSON = await response.json();
            dispatch({ type: AUTH_SUCCESS, payload: responseJSON });
        }
    };
}
