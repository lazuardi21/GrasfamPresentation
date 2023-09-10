// reducers.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const appReducer = createReducer(initialState, {
  TOGGLE_DARK_MODE: (state) => {
    return { ...state, isDarkMode: !state.isDarkMode };
  },
});

export default appReducer;