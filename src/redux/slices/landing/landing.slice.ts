import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrophyObject } from '../../../types/index';

export interface LandingState {
  trophies: TrophyObject[];
}

const initialState: LandingState = {
  trophies: [],
}

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setTrophies: (state, action: PayloadAction<TrophyObject[]>) => {
      state.trophies = action.payload;
    },
  },
});

export const { setTrophies } = landingSlice.actions;

export default landingSlice.reducer;