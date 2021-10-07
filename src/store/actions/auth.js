import { AUTH_SUCCESS, REGISTER_SUCCESS, AUTH_CHECK_FROM_LS, LOGOFF } from "./auth.types";
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
            window.localStorage.setItem("sessionData", JSON.stringify(payload));
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
        }
    };
}

export function logoff() {
    return async (dispatch) => {
        window.localStorage.removeItem("sessionData");
        dispatch({
            type: LOGOFF,
        });
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
