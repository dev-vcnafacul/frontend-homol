import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, { auth: "" }, applyMiddleware(thunk));

export default store;
