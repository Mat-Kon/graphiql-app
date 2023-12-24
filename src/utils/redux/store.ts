import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import variablesSlice from './variablesSlice';
import headersSlice from './headersSlice';

const rootReduser = combineReducers({
  loading: loadingSlice,
  variables: variablesSlice,
  headers: headersSlice,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
