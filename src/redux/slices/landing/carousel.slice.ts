import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CarouselState {
  multiplier: number;
  constraint: number;
  itemWidth: number;
  sliderWidth: number;
  activeItem: number;
}

const initialState: CarouselState = {
  multiplier: 0.35,
  constraint: 0,
  itemWidth: 0,
  sliderWidth: 0,
  activeItem: 0,
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setMultiplier: (state, action: PayloadAction<number>) => {
      state.multiplier = action.payload;
    },
    setConstraint: (state, action: PayloadAction<number>) => {
      state.constraint = action.payload;
    },
    setItemWidth: (state, action: PayloadAction<number>) => {
      state.itemWidth = action.payload;
    },
    setSliderWidth: (state, action: PayloadAction<number>) => {
      state.sliderWidth = action.payload;
    },
    setActiveItem: (state, action: PayloadAction<number>) => {
      state.activeItem = action.payload;
    },
    decrementActiveItem: (state) => {
      state.activeItem -= 1;
    },
    increamentActiveItem: (state) => {
      state.activeItem += 1;
    },
  },
});

export const { setMultiplier, setConstraint, setItemWidth, setSliderWidth, setActiveItem, decrementActiveItem, increamentActiveItem } =
  carouselSlice.actions;

export default carouselSlice.reducer;
