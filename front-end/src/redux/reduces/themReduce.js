import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const themeReduce = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toglleTheme: (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }
    },
  },
});

export const { toglleTheme } = themeReduce.actions;

export default themeReduce.reducer;
