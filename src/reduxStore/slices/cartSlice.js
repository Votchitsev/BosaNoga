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
    del(state, action) {
      const deleteditem = state.cart.find((item) => item.product.id === action.payload);
      state.cart.splice(state.cart.indexOf(deleteditem), 1);
    },
  },
});

export const { add, del } = cartSlice.actions;

export default cartSlice.reducer;
