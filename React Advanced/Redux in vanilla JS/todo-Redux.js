const redux = require("redux");
//Action types
const ADD_TODO = "Add todo";
const TOGGLE_TODO = "Toggle todo";

//Action creator functions

const addTodo = (text) => ({ text: text, type: ADD_TODO });
const toggleTodo = (index) => ({ index: index, type: TOGGLE_TODO });

//Initial State

const initialState = { todos: [] };

//Reducer functions
//Must return the updated state

function todoReducer(state = initialState, action) {
  //this action is coming from action creator functions
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i == action.index) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

//Creating store

const store = redux.createStore(todoReducer);

//Dispatch the actions

store.dispatch(addTodo("Study at 8"));
store.dispatch(addTodo("Office at 9"));
store.dispatch(toggleTodo(0));

//Read data from the store

console.log(store.getState())

