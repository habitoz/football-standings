import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 'League',
  showSearchForm: true,
};

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    chengePage(state, action) {
      state.activePage = action.payload;
    },
    toogleSearchForm(state) {
      state.showSearchForm = !state.showSearchForm;
    },
  },
});
export const { chengePage, toogleSearchForm } = appInfoSlice.actions;
export default appInfoSlice.reducer;
