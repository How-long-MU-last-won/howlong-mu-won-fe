import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayerObject } from '../../../types/index';

export interface PlayersState {
  players: PlayerObject[];
  hightlightedPlayer: PlayerObject | null;
  isPlayersLoading: boolean;
}

const initialState: PlayersState = {
  players: [],
  hightlightedPlayer: null,
  isPlayersLoading: true,
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
    },
    finishPlayersLoading: (state) => {
      state.isPlayersLoading = false;
    }
  },
});

export const { setPlayers, setHighlightedPlayer, finishPlayersLoading } = playersSlice.actions;

export default playersSlice.reducer;