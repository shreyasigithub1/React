import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Meeting at 9", completed: false },
    { text: "Study at 8", completed: true },
  ],
};
export function todoReducers(state = initialState, action) {
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
            e;
          }
          return todo;
        }),
      };
    default: {
      return state;
    }
  }
}
