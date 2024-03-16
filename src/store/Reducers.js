// reducers.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

// const appReducer = createReducer(initialState, {
//   TOGGLE_DARK_MODE: (state) => {
//     return { ...state, isDarkMode: !state.isDarkMode };
//   },
// });

// Define your action type
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

// Then use it in your reducer
const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TOGGLE_DARK_MODE, (state) => {
      state.isDarkMode = !state.isDarkMode;
    });
});

export default appReducer;