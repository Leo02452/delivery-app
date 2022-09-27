import { createSlice } from '@reduxjs/toolkit';
import calculateTotalPrice from '../../helpers/calculateTotalPrice';

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const cartReduce = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const productExists = state.cartProducts
        .find((product) => product.id === action.payload.id);

      if (!productExists) {
        state.cartProducts.push(action.payload);
      } else {
        state.cartProducts = state.cartProducts.map((prd) => {
          if (prd.id === productExists.id) {
            return action.payload;
          }
          return prd;
        });
      }
      state.totalPrice = calculateTotalPrice(state.cartProducts);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts
        .filter((product) => product.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.cartProducts);
    },
  },
});

export const { updateCart, removeFromCart } = cartReduce.actions;

export default cartReduce.reducer;
