import { configureStore } from '@reduxjs/toolkit';
import catalogPageReducer from './slices/catalogPageSlice';

export default configureStore({
  reducer: {
    catalogPage: catalogPageReducer,
  },
});
