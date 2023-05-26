import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { permissionReducer } from "./permission";

const reducers = combineReducers({ auth: authReducer, permission: permissionReducer });

export default reducers;
