import { AUTH_SUCCESS } from "store/actions/auth.types";
import { UPDATE_ACCOUNT_SUCCESS } from "store/actions/account.types";

export function authReducer(state = "", action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.payload;
        case UPDATE_ACCOUNT_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
