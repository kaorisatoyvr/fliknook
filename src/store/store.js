import { configureStore } from '@reduxjs/toolkit';
import favsReducer from '../features/favsSlice';

export const store = configureStore({
  reducer: {
    favs: favsReducer
  }
});
