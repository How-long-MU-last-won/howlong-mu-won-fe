import { createSlice } from '@reduxjs/toolkit';

export interface NavbarMenuDisplayState {
  value: 'none' | 'flex';
}

const initialState: NavbarMenuDisplayState = {
  value: 'none',
}

export const navbarMenuDisplaySlice = createSlice({
  name: 'navbarMenuDisplay',
  initialState,
  reducers: {
    show: (state) => {
      state.value = 'flex';
    },
    hide: (state) => {
      state.value = 'none';
    }
  },
});

export const { show, hide } = navbarMenuDisplaySlice.actions;

export default navbarMenuDisplaySlice.reducer;