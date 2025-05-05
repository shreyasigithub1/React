import { todoReducer } from "./reducers/todoReducers";
import { noteReducer } from "./reducers/noteReducers";
import { configureStore } from "@reduxjs/toolkit";
// import * as redux from "redux";
// import { combineReducers } from "redux";

//const redux = require("redux");//This is also an option

// const result = combineReducers({
//     todoReducer: todoReducers,
//     noteReducer:noteReducers
// })
//export const store = redux.createStore(result);

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});
