// store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './Reducers'; // Import the named appReducer

const store = configureStore({
  reducer: {
    app : appReducer, // Use the 'appReducer' under the 'app' key
}
});

export default store;
