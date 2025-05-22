// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { homepageApi } from '../services/homePageApi.js';

export const store = configureStore({
  reducer: {
    [homepageApi.reducerPath]: homepageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homepageApi.middleware),
});
