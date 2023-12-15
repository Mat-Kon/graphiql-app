import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitState {
  isLoading: boolean;
}

const initialState: IinitState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setloading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setloading } = loadingSlice.actions;
export default loadingSlice.reducer;
