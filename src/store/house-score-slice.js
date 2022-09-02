import { createSlice } from '@reduxjs/toolkit';

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

export const houseScoreActions = houseScoreSlice.actions;
export default houseScoreSlice.reducer;
