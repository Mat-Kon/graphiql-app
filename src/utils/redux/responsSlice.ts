import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitState {
  respons: unknown;
}

const initialState: IinitState = {
  respons: null,
};

const responsSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setRespons: (state, action: PayloadAction<unknown>) => {
      state.respons = action.payload;
    },
  },
});

export const { setRespons } = responsSlice.actions;
export default responsSlice.reducer;
