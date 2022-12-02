/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'catalogPageSlice',
  initialState: {
    mainPageSearchIsAvailable: false,
    searchValue: null,
    catalogSearchFormFillText: null,
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    addCatalogSearchFormFillText(state, action) {
      state.catalogSearchFormFillText = action.payload;
    },
  },
});

export const {
  setMainPage,
  setCatalogPage,
  setSearchValue,
  addCatalogSearchFormFillText,
} = searchSlice.actions;

export default searchSlice.reducer;
