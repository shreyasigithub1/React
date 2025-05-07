//import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur alias sint quae, repellat porro sapiente omnis sit et quod.",
      createdOn: Date.now(),
    },
    {
      text: "ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nemo?",
      createdOn: Date.now(),
    },
  ],
};

//Using redux
// export function noteReducers(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.text, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((note, i) => i !== action.index),
//       };
//     default:
//       return state;
//   }
// }

/**
 * state.notes.splice(index,1);
 * return{
 * ...state,notes:[...state.notes]}
 */

//Using Redux toolkit

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({ text: action.payload, createdOn: Date.now() });
    },
    delete: (state, action) => {
      state.notes=state.notes.filter((note, i) => i == action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const actions = noteSlice.actions;

export const noteSelector = (state) => state.noteReducer.notes;