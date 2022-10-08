import { configureStore } from '@reduxjs/toolkit';
import cartReduce from './reduces/cartReduce';
import themeReduce from './reduces/themReduce';
import userReduce from './reduces/userReduce';

const store = configureStore({
  reducer: {
    cart: cartReduce,
    users: userReduce,
    theme: themeReduce,
  },
});

export default store;
