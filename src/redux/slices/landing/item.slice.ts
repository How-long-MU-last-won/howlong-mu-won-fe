import { createSlice } from '@reduxjs/toolkit';

export interface TrackState {
  userDidTab: boolean;
}

const initialState: TrackState = {
  userDidTab: false,
}

export const trackSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setUserDidTab: (state) => {
      state.userDidTab = true;
    },
    setUderDidNotTab: (state) => {
      state.userDidTab = false;
    },
  },
});

export const { setUserDidTab, setUderDidNotTab } = trackSlice.actions;

export default trackSlice.reducer;