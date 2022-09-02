import { configureStore } from '@reduxjs/toolkit';

import userScoreReducer from './user-score-slice';
import houseScoreReducer from './house-score-slice';

const store = configureStore({
  reducer: {
    userScore: userScoreReducer,
    houseScore: houseScoreReducer,
  },
});

export default store;
