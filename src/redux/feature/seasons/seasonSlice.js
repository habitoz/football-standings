import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchSeasons = createAsyncThunk(
  'seasons/fetchSeasons',
  async (leagueId) => {
    const response = await getRequest(`/leagues/${leagueId}/seasons`);
    return response || {};
  },
);

const initialState = {
  seasons: [],
  leagueInfo: null,
  loading: false,
  seasonInProcess: null,
  error: null,
};

const seasonSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeasons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeasons.fulfilled, (state, action) => {
        const { seasons, ...otherInfo } = action.payload.data;
        state.seasons = seasons;
        state.leagueInfo = otherInfo;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSeasons.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch seasons from the API.';
      });
  },
});

export default seasonSlice.reducer;
