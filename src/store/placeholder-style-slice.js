import { createSlice } from '@reduxjs/toolkit';

const initialPlaceholderStyleState = { placeholderStyle: false };

const placeholderStyleSlice = createSlice({
  name: 'placeholderStyle',
  initialState: initialPlaceholderStyleState,
  reducers: {
    activate(state) {
      state.placeholderStyle = true;
      console.log('state.placeholderStyle: ', state.placeholderStyle);
    },
    deactivate(state) {
      state.placeholderStyle = false;
      console.log('state.placeholderStyle: ', state.placeholderStyle);
    },
  },
});

export const placeholderStyleActions = placeholderStyleSlice.actions;
export default placeholderStyleSlice.reducer;
