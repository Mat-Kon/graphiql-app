import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import querySlice from './querySlice';
import responsSlice from './responsSlice';
import prettifiedSlice from './prettifiedSlice';
import variablesSlice from './variablesSlice';
import headersSlice from './headersSlice';

const rootReduser = combineReducers({
  loading: loadingSlice,
  quary: querySlice,
  respons: responsSlice,
  prettified: prettifiedSlice,
  variables: variablesSlice,
  headers: headersSlice,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
