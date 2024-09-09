import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitState {
  response: unknown;
}

const initialState: IInitState = {
  response: null,
};

const responseSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<unknown>) => {
      state.response = action.payload;
    },
  },
});

export const { setResponse } = responseSlice.actions;
export default responseSlice.reducer;
