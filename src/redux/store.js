import { configureStore } from '@reduxjs/toolkit';
import leaguesSlice from './feature/leagues/leaguesSlice';

const store = configureStore({
  reducer: {
    league: leaguesSlice,
  },
});

export default store;
