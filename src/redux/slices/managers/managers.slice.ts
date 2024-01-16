import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ManagerObject } from '../../../types/index';

export interface ManagersState {
  managers: ManagerObject[];
}

const initialState: ManagersState = {
  managers: [],
}

export const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    setManagers: (state, action: PayloadAction<ManagerObject[]>) => {
      state.managers = action.payload;
    },
  },
});

export const { setManagers } = managersSlice.actions;

export default managersSlice.reducer;