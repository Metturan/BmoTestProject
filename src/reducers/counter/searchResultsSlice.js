import { createSlice } from '@reduxjs/toolkit';

export const savedSearchResults = createSlice({
  name: 'searchResults',
  initialState: {
    value: [],
  },
  reducers: {
    results: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { results } = savedSearchResults.actions;

export default savedSearchResults.reducer;
