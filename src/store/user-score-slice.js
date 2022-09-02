import { createSlice } from '@reduxjs/toolkit';

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

export const userScoreActions = userScoreSlice.actions;
export default userScoreSlice.reducer;
