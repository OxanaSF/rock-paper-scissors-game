import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialUserScoreState = { userScore: 0 };

const userScoreSlice = createSlice({
  name: 'userScore',
  initialState: initialUserScoreState,
  reducers: {
    increment(state) {
      state.userScore++;
    },
  },
});

const initialHouseScoreState = { houseScore: 0 };

const houseScoreSlice = createSlice({
  name: 'houseScore',
  initialState: initialHouseScoreState,
  reducers: {
    increment(state) {
      state.houseScore++;
    },
  },
});

const store = configureStore({
  reducer: {
    userScore: userScoreSlice.reducer,
    houseScore: houseScoreSlice.reducer,
  },
});

export const userScoreActions = userScoreSlice.actions;
export const houseScoreActions = houseScoreSlice.actions;

export default store;
