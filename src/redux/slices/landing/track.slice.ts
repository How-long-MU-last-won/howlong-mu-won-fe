import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TrackState {
  trackIsActive: boolean;
  dragStartPosition: number;
}

const initialState: TrackState = {
  trackIsActive: false,
  dragStartPosition: 0,
}

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrackActive: (state) => {
      state.trackIsActive = true;
    },
    setTrackInActive: (state) => {
      state.trackIsActive = false;
    },
    setDragStartPosition: (state, action: PayloadAction<number>) => {
      state.dragStartPosition = action.payload;
    },
  },
});

export const { setTrackActive, setTrackInActive, setDragStartPosition } = trackSlice.actions;

export default trackSlice.reducer;