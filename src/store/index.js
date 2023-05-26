import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, { auth: "", permission: "" }, applyMiddleware(thunk));

export default store;
