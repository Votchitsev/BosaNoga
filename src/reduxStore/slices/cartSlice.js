import { createSlice } from '@reduxjs/toolkit';
import { addDataToStorage, getDataFromStorage } from '../../localStorage/localStorage';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: getDataFromStorage() ? getDataFromStorage() : [],
  },
  reducers: {
    add(state, action) {
      if (!state.cart.filter((item) => item.product.id === action.payload.product.id).length) {
        state.cart.push(action.payload);
        addDataToStorage(state.cart);
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
