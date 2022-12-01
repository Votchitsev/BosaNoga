/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'catalogPageSlice',
  initialState: {
    mainPageSearchIsAvailable: false,
    searchValue: null,
  },
  reducers: {
    openSearchField(state) {
      state.mainPageSearchIsAvailable = true;
    },
    closeSearchField(state) {
      state.mainPageSearchIsAvailable = false;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setMainPage, setCatalogPage, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
