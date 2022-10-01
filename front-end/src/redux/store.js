import { configureStore } from '@reduxjs/toolkit';
import cartReduce from './reduces/cartReduce';
import themeReduce from './reduces/themReduce';

const store = configureStore({
  reducer: {
    cart: cartReduce,
    theme: themeReduce,
  },
});

export default store;
