import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolio/portfolioSlice';
import formReducer from './form/formSlice';

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    form: formReducer,
  },
});

export default store;
