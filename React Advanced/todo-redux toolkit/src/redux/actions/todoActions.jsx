//Action constants

export const ADD_TODO = "Add Todo";
export const TOGGLE_TODO = "Toggle Todo";

//Action creator functions

export const AddTodo = (text) => ({ text, type: ADD_TODO });
export const ToggleTodo = (index) => ({ index, type: TOGGLE_TODO });

