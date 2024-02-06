import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../core/home/reducer';
import lobbyReducer from '../core/lobby/reducer';

export default configureStore({
  reducer: {
    home: homeReducer,
    lobby: lobbyReducer,
  },
});