import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import variablesSlice from './variablesSlice';

const rootReduser = combineReducers({
  loading: loadingSlice,
  variables: variablesSlice,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
