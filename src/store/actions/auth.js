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
                        nome: responseJSON.user.nome,
                        sobrenome: responseJSON.user.sobrenome,
                        genero: responseJSON.user.genero,
                        nascimento: `${dayBirthday}/${monthBirthday}/${birthday.getFullYear()}`,
                        telefone: responseJSON.user.telefone,
                        estado: responseJSON.user.estado,
                        cidade: responseJSON.user.cidade,
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
