import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducer/produkReducer'

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
