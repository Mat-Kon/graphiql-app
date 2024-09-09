import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headers: '{}',
};

const headersSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    setHeaders: (state, action) => {
      state.headers = action.payload;
    },
  },
});

export const { setHeaders } = headersSlice.actions;
export default headersSlice.reducer;
