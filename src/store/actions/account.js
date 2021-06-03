import { UPDATE_ACCOUNT_SUCCESS } from "./account.types";
import { API_URL } from "../../constants";

export function updateAccount(data, userToken) {
    return async (dispatch) => {
        const response = await fetch(`${API_URL}/patchme`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: `Baerer ${userToken}` },
            body: JSON.stringify(data),
        });

        if (response.status !== 200) {
            throw new Error("Error");
        } else {
            const responseJSON = await response.json();
            const birthday = new Date(responseJSON.user.birthday.replace("Z", ""));
            const monthBirthday = birthday.getMonth() + 1 < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth();
            const dayBirthday = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
            dispatch({
                type: UPDATE_ACCOUNT_SUCCESS,
                payload: {
                    email: responseJSON.user.email,
                    firstName: responseJSON.user.first_name,
                    lastName: responseJSON.user.last_name,
                    gender: responseJSON.user.gender,
                    birthday: `${dayBirthday}/${monthBirthday}/${birthday.getFullYear()}`,
                    phone: responseJSON.user.phone,
                    state: responseJSON.user.state,
                    city: responseJSON.user.city,
                },
            });
        }
    };
}
