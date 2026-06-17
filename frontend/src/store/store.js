import { configureStore } from '@reduxjs/toolkit';
import adReducer from './adSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    ad: adReducer,
    ui: uiReducer,
  },
});