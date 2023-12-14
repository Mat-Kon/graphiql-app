import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { curApi } from '../api/api';
import loadingSlice from './loadingSlice';

const rootReduser = combineReducers({
  loading: loadingSlice,
  [curApi.reducerPath]: curApi.reducer,
});

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(curApi.middleware);
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
