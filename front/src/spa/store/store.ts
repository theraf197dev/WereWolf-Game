import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../core/home/reducer';

export default configureStore({
  reducer: {
    home: homeReducer,
  },
});