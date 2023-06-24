import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './projects/portfolioSlice';

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export default store;
