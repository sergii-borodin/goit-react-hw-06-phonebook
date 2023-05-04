import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilterChange: (state, action) => {
      console.log('payload', action.payload);
      console.log('state', state);

      return action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onFilterChange } = filterSlice.actions;
