import { createStore, combineReducers } from "redux";
import { Reducer } from "./reducers";

const store = createStore(
    combineReducers({
        app: Reducer
    })
);

export default store;
