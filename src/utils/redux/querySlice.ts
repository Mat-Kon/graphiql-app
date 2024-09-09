import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitState {
  query: string;
}

const initialState: IinitState = {
  query: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
