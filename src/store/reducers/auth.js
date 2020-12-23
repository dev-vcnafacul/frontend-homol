import { AUTH_SUCCESS } from "../actions/auth.types";

export function authReducer(state = "", action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
