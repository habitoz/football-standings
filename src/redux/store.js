import { configureStore } from '@reduxjs/toolkit';
import leaguesSlice from './feature/leagues/leaguesSlice';
import seasonSlice from './feature/seasons/seasonSlice';
import appInfoSlice from './feature/app-info/appInfoSlice';

const store = configureStore({
  reducer: {
    league: leaguesSlice,
    season: seasonSlice,
    appInfo: appInfoSlice,
  },
});

export default store;
