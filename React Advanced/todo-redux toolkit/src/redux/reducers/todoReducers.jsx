//import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { text: "Meeting at 9", completed: false },
    { text: "Study at 8", completed: true },
  ],
};
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
    add: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggle: (state, action) => {
      state.todos = state.todos.map((todo, i) => {
        if (i == action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo; //it returns all the todo in the todos array with tyhe modified ones too
      });
    },
  },
});

//reducer

export const todoReducer = todoSlice.reducer;

//action

export const actions = todoSlice.actions;

//selector
export const todoSelector = (state) => state.todoReducer.todos;
