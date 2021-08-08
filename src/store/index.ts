import {configureStore} from '@reduxjs/toolkit';
import inputStateReducer from '../feature/input';

export const store = configureStore({
  reducer: {
    inputState: inputStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
