import { createSlice } from '@reduxjs/toolkit';

const initialUserPickState = { userPick: '' };

const userPickSlice = createSlice({
  name: 'userPick',
  initialState: initialUserPickState,
  reducers: {
   userPickUpdate(state, action) {
      state.userPick = action.payload
    },
  },
});

export const userPickActions = userPickSlice.actions;
export default userPickSlice.reducer;
