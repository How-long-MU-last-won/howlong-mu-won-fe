import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayerObject } from '../../../types/index';

export interface PlayersState {
  players: PlayerObject[];
  hightlightedPlayer: PlayerObject | null;
}

const initialState: PlayersState = {
  players: [],
  hightlightedPlayer: null,
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<PlayerObject[]>) => {
      state.players = action.payload;
    },
    setHighlightedPlayer: (state, action: PayloadAction<PlayerObject>) => {
      state.hightlightedPlayer = action.payload;
    }
  },
});

export const { setPlayers, setHighlightedPlayer } = playersSlice.actions;

export default playersSlice.reducer;