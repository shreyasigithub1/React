import { todoReducers } from "./reducers/todoReducers";
import { noteReducers } from "./reducers/noteReducers";
import * as redux from "redux";
import { combineReducers } from "redux";

//const redux = require("redux");//This is also an option

const result = combineReducers({
    todoReducer: todoReducers,
    noteReducer:noteReducers
})
export const store = redux.createStore(result);