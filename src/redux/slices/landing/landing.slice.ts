import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrophyObject } from '../../../types/index';

export interface LandingState {
  trophies: TrophyObject[];
  isTrophiesLoading: boolean;
}

const initialState: LandingState = {
  trophies: [],
  isTrophiesLoading: true,
}

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setTrophies: (state, action: PayloadAction<TrophyObject[]>) => {
      state.trophies = action.payload;
    },
    finishTrophiesLoading: (state) => {
      state.isTrophiesLoading = false;
    }
  },
});

export const { setTrophies, finishTrophiesLoading } = landingSlice.actions;

export default landingSlice.reducer;