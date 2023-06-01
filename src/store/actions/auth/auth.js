import { HOME_PATH } from "routing/paths";
import {
    AUTH_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_CHECK_FROM_LS,
    LOGOFF,
    PERMISSION_SUCCESS,
    UPDATE_PERMISSION,
} from "./auth.types";

export function doAuth(email, password) {
    return async (dispatch) => {
        const data = { email, password };
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const payloadReceived = await response.json();
        if (response.status === 400) {
            throw new Error("A senha informada está incorreta!");
        } else if (response.status === 404) {
            throw new Error("Esse e-mail não foi cadastrado em nossa plataforma!");
        } else if (response.status === 422) {
            let errorField = "";
            switch (payloadReceived["errors"][0]["field"]) {
                case "password":
                    errorField = "senha";
                    break;
                default:
                    errorField = payloadReceived["errors"][0]["field"];
            }
            throw new Error("Preencha corretamente o campo de " + errorField + " e tente novamente!");
        } else {
            const birthday = new Date(payloadReceived.user.nascimento.replace("Z", ""));
            const monthBirthday = birthday.getMonth() + 1 < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth();
            const dayBirthday = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
            const payload = {
                token: payloadReceived.token.token,
                user: {
                    email: payloadReceived.user.email,
                    nome: payloadReceived.user.nome,
                    sobrenome: payloadReceived.user.sobrenome,
                    genero: payloadReceived.user.genero,
                    nascimento: `${dayBirthday}/${monthBirthday}/${birthday.getFullYear()}`,
                    telefone: payloadReceived.user.telefone,
                    estado: payloadReceived.user.estado,
                    cidade: payloadReceived.user.cidade,
                },
            };
            const payload_permission = payloadReceived.p;
            window.localStorage.setItem("sessionData", JSON.stringify(payload));
            window.localStorage.setItem("pData", JSON.stringify(payload_permission));
            dispatch({
                type: PERMISSION_SUCCESS,
                payload: payload_permission,
            });
            dispatch({
                type: AUTH_SUCCESS,
                payload: payload,
            });
        }
    };
}

export function updateAuthByLocalStorage() {
    return async (dispatch) => {
        if (window.localStorage.getItem("sessionData") !== null) {
            dispatch({
                type: AUTH_CHECK_FROM_LS,
                payload: JSON.parse(window.localStorage.getItem("sessionData")),
            });
            dispatch({
                type: UPDATE_PERMISSION,
                payload: JSON.parse(window.localStorage.getItem("pData")),
            });
        }
    };
}

export function logoff() {
    return async (dispatch) => {
        window.localStorage.removeItem("sessionData");
        window.localStorage.removeItem("pData");
        dispatch({
            type: LOGOFF,
        });
    };
}

export function register(email, password, navigate) {
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
            navigate({ pathname: HOME_PATH });
        }
    };
}
