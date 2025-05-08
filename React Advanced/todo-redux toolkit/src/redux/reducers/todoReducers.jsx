//import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";
const initialState = {
  todos: [
    // { text: "Meeting at 9", completed: false },
    // { text: "Study at 8", completed: true },
  ],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialStateAsync",
  // (arg,thunkAPI) => {
  //   axios.get("http://localhost:4100/api/todos/").then((res) => {
  //     console.log(res.data);
  //     //dispatch(actions.setIntialState(res.data));
  //     thunkAPI.dispatch(actions.setIntialState(res.data));
  //   });
  // }

  //Another approach

  () => {
    return axios.get("http://localhost:4100/api/todos/");
  }
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    const response = await fetch("http://localhost:4100/api/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: payload,
        completed: false,
      }),
    });
    return response.json();
  }
);

//reducer using Redux

// export function todoReducers(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { text: action.text, completed: false }],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i == action.index) {
//             return { ...todo, completed: !todo.completed };
//             e;
//           }
//           return todo;
//         }),
//       };
//     default: {
//       return state;
//     }
//   }
// }

//Reducer using redux toolkit

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // setIntialState: (state, action) => {
    //   state.todos = [...action.payload];
    // },
    // add: (state, action) => {
    //   state.todos.push({ text: action.payload, completed: false });
    // },
    toggle: (state, action) => {
      state.todos = state.todos.map((todo, i) => {
        if (i == action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo; //it returns all the todo in the todos array with tyhe modified ones too
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialStateAsync.fulfilled, (state, action) => {
        state.todos = [...action.payload.data]; // action.payload is the result of the promise from the API data
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos.push(action.payload); // Add new todo to the state
      });
  },
});

//reducer

export const todoReducer = todoSlice.reducer;

//action

export const actions = todoSlice.actions;

//selector
export const todoSelector = (state) => state.todoReducer.todos;
