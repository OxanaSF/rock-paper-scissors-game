import { configureStore } from '@reduxjs/toolkit';

import userScoreReducer from './user-score-slice';
import houseScoreReducer from './house-score-slice';
import gameResultReducer from './game-result-slice'
import userPickReducer from './user-pick-slice'
import housePickReducer from './house-pick-slice'
import placeholderStyleReducer from './placeholder-style-slice'

const store = configureStore({
  reducer: {
    userScore: userScoreReducer,
    houseScore: houseScoreReducer,
    gameResult: gameResultReducer,
    userPick: userPickReducer,
    housePick: housePickReducer,
    placeholderStyle: placeholderStyleReducer
  },
});

export default store;
