import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
  },
  reducers: {
    add(state, action) {
      if (!state.cart.filter((item) => item.product.id === action.payload.product.id).length) {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
