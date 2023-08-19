import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchLeagues = createAsyncThunk(
  'leagues/fetchLeagues',
  async () => {
    const response = await getRequest('/leagues');
    return response || {};
  },
);

const initialState = {
  leagues: [],
  loading: false,
  leagueInProcess: null,
  searchString: '',
  error: null,
};

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.leagues = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchLeagues.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch leagues from the API.';
      });
  },
});
export const { setSearchString } = leaguesSlice.actions;
export default leaguesSlice.reducer;
