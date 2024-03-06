import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayerObject } from '../../../types/index';

export interface PlayersState {
  hightlightedPlayer: PlayerObject | null;
  seachString: string;
}

const initialState: PlayersState = {
  hightlightedPlayer: null,
  seachString: '',
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
  },
});

export const { setHighlightedPlayer, setSearchString } = playersSlice.actions;

export default playersSlice.reducer;
