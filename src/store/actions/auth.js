import { AUTH_SUCCESS, REGISTER_SUCCESS } from "./auth.types";
import { HOME_PATH } from "../../routing/paths";
import { API_URL } from "../../constants";

export function doAuth(email, password) {
    return async (dispatch) => {
        const data = { email, password };
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.status === 400) {
            throw new Error("User not found");
        } else {
            const responseJSON = await response.json();
            const birthday = new Date(responseJSON.user.nascimento.replace("Z", ""));
            const monthBirthday = birthday.getMonth() + 1 < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth();
            const dayBirthday = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
            dispatch({
                type: AUTH_SUCCESS,
                payload: {
                    token: responseJSON.token.token,
                    user: {
                        email: responseJSON.user.email,
                        firstName: responseJSON.user.nome,
                        lastName: responseJSON.user.sobrenome,
                        gender: responseJSON.user.genero,
                        birthday: `${dayBirthday}/${monthBirthday}/${birthday.getFullYear()}`,
                        phone: responseJSON.user.telefone,
                        state: responseJSON.user.estado,
                        city: responseJSON.user.cidade,
                    },
                },
            });
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
