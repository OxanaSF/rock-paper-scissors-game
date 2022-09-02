import { createSlice } from '@reduxjs/toolkit';

const initialHousePickState = { housePick: '' };

const housePickSlice = createSlice({
  name: 'housePick',
  initialState: initialHousePickState ,
  reducers: {
   housePickUpdate(state, action) {
      state.housePick = action.payload
    },
  },
});

export const housePickActions = housePickSlice.actions;
export default housePickSlice.reducer;
