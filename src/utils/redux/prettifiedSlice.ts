import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitState {
  prettifiedQuery: string;
}

const initialState: IinitState = {
  prettifiedQuery: '',
};

const prettifiedSlice = createSlice({
  name: 'prettified',
  initialState,
  reducers: {
    setPrrettified: (state, action: PayloadAction<string>) => {
      state.prettifiedQuery = action.payload;
    },
  },
});

export const { setPrrettified } = prettifiedSlice.actions;
export default prettifiedSlice.reducer;
