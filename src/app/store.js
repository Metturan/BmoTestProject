import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../reducers/counter/searchResultsSlice';

export default configureStore({
  reducer: {
    searchResults: searchResultsReducer
  },
});
