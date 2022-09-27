import { configureStore } from '@reduxjs/toolkit';
import cartReduce from './reduces/cartReduce';

const store = configureStore({
  reducer: cartReduce,
});

export default store;
