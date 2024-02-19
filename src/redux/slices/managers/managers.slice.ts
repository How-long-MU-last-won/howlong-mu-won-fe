import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ManagerObject } from '../../../types/index';

export interface ManagersState {
  managers: ManagerObject[];
  isManagersLoading: boolean;
}

const initialState: ManagersState = {
  managers: [],
  isManagersLoading: true,
};

export const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    setManagers: (state, action: PayloadAction<ManagerObject[]>) => {
      state.managers = action.payload;
    },
    finishManagersLoading: (state) => {
      state.isManagersLoading = false;
    },
  },
});

export const { setManagers, finishManagersLoading } = managersSlice.actions;

export default managersSlice.reducer;
