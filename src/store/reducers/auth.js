import { AUTH_SUCCESS, AUTH_CHECK_FROM_LS, LOGOFF } from "store/actions/auth.types";
import { UPDATE_ACCOUNT_SUCCESS } from "store/actions/account.types";

export function authReducer(state = "", action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.payload;
        case AUTH_CHECK_FROM_LS:
            return action.payload;
        case UPDATE_ACCOUNT_SUCCESS:
            return { ...state, user: action.payload };
        case LOGOFF:
            return "";
        default:
            return state;
    }
}
