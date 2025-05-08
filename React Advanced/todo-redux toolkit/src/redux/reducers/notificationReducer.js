//Extra Reducer

import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducers";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actions.add, (state, action) => {
      //Not hardcoding the data and the action.add coming from the action in todoReducer
      state.message = "Todo is created";
    });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;

//These two are deprecated

//hardcoded one

// extraReducers: (builder) => {
//     builder.addCase("todo/add", (state, action) => {
//       state.message = "Todo is created";
//     });
//   },

//using map objects

//   extraReducers: {
//     //map objects:[key]:value
//     [actions.add]: (state, action) => {
//       state.message = "Todo is created";
//     },
//   },
