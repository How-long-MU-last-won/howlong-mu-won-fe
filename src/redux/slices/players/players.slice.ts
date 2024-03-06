import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DisplayPlayerSectionObject, PlayerObject } from '@/types/index';

export interface PlayersState {
  hightlightedPlayer: PlayerObject | null;
  seachString: string;
  displayPlayerSection: DisplayPlayerSectionObject;
}

const initialState: PlayersState = {
  hightlightedPlayer: null,
  seachString: '',
  displayPlayerSection: {
    'GK': true,
    'DF': true,
    'MF': true,
    'FW': true,
  },
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setHighlightedPlayer: (state, action: PayloadAction<PlayerObject>) => {
      state.hightlightedPlayer = action.payload;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.seachString = action.payload;
    },
    setDisplayPlayerSection: (
      state,
      action: PayloadAction<DisplayPlayerSectionObject>
    ) => {
      state.displayPlayerSection = action.payload;
    },
  },
});

export const { setHighlightedPlayer, setSearchString, setDisplayPlayerSection } = playersSlice.actions;

export default playersSlice.reducer;
