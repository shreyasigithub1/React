import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur alias sint quae, repellat porro sapiente omnis sit et quod.",
      createdOn: new Date(),
    },
    {
      text: "ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nemo?",
      createdOn: new Date(),
    },
  ],
};

export function noteReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { text: action.text, createdOn: new Date() }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== action.index),
      };
    default:
      return state;
  }
}
/**
 * state.notes.splice(index,1);
 * return{
 * ...state,notes:[...state.notes]}
 */