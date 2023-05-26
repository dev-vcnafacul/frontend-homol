import { LOGOFF, PERMISSION_SUCCESS, UPDATE_PERMISSION } from "store/actions/auth/auth.types";

export function permissionReducer(state = "", action) {
    switch (action.type) {
        case PERMISSION_SUCCESS:
            return action.payload;
        case UPDATE_PERMISSION:
            return action.payload;
        case LOGOFF:
            return "";
        default:
            return state;
    }
}
