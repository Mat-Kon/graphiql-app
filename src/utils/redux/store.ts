import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';

const rootReduser = combineReducers({
  loading: loadingSlice,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
