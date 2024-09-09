import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variables: '{}',
};

const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setVariables: (state, action) => {
      state.variables = action.payload;
    },
  },
});

export const { setVariables } = variablesSlice.actions;
export default variablesSlice.reducer;
