import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const cartReduce = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.cartProducts
        .find((product) => product.id === action.payload.id);

      if (!productExists) {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartProducts = state.cartProducts.map((prd) => {
          if (prd.id === product.id) {
            return { ...prd, quantity: prd.quantity + 1 };
          }
          return prd;
        });
      }
      totalPrice = cartProducts.reduce((acc, product) => acc + product.price, 0);
    },
    removeFromCart: (state, action) => {
      state.cartProducts.filter((product) => product.id !== action.payload.id);
      totalPrice = cartProducts.reduce((acc, product) => acc + product.price, 0);
    },
  },
});

export default cartReduce;
