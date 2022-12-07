import { createSlice } from '@reduxjs/toolkit';
import { addDataToStorage as updateStorageData, getDataFromStorage } from '../../localStorage/localStorage';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: getDataFromStorage() ? getDataFromStorage() : [],
  },
  reducers: {
    add(state, action) {
      const existingProduct = state.cart.find(
        (product) => product.product.id === action.payload.product.id
        && product.size === action.payload.size,
      );

      if (existingProduct) {
        const s = state;
        s.cart[state.cart.indexOf(existingProduct)].amount += action.payload.amount;
        updateStorageData(state.cart);
        return;
      }

      state.cart.push(action.payload);
      updateStorageData(state.cart);
    },
    del(state, action) {
      const deleteditem = state.cart.find((item) => item.product.id === action.payload);
      state.cart.splice(state.cart.indexOf(deleteditem), 1);
      updateStorageData(state.cart);
    },
  },
});

export const { add, del } = cartSlice.actions;

export default cartSlice.reducer;
