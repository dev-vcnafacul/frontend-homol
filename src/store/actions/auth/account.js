import { UPDATE_ACCOUNT_SUCCESS } from "./account.types";

export function updateAccount(data, userToken) {
    return async (dispatch) => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/patchme`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${userToken}` },
            body: JSON.stringify(data),
        });
        if (response.status !== 200) {
            throw new Error("Token error");
        } else {
            const responseJSON = await response.json();
            const birthday = new Date(responseJSON.nascimento.replace("Z", ""));
            const monthBirthday = birthday.getMonth() + 1 < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth();
            const dayBirthday = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
            dispatch({
                type: UPDATE_ACCOUNT_SUCCESS,
                payload: {
                    email: responseJSON.email,
                    nome: responseJSON.nome,
                    sobrenome: responseJSON.sobrenome,
                    genero: responseJSON.genero,
                    nascimento: `${dayBirthday}/${monthBirthday}/${birthday.getFullYear()}`,
                    telefone: responseJSON.telefone,
                    estado: responseJSON.estado,
                    cidade: responseJSON.cidade,
                },
            });
        }
    };
}
