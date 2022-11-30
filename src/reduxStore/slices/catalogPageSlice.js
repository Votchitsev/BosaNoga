import { createSlice } from '@reduxjs/toolkit';

export const catalogPageSlice = createSlice({
  name: 'catalogPageSlice',
  initialState: {
    catalogPage: 'main',
  },
  reducers: {
    setMainPage: (state) => {
      const currentState = state;
      currentState.catalogPage = 'main';
    },
    setCatalogPage: (state) => {
      const currentState = state;
      currentState.catalogPage = 'catalog';
    },
  },
});

export const { setMainPage, setCatalogPage } = catalogPageSlice.actions;

export default catalogPageSlice.reducer;
