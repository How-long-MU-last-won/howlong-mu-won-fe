import { configureStore } from '@reduxjs/toolkit';
import navBarMenuDisplayReducer from './slices/navbar/navbar-menu-display.slice';
import carouselReducer from './slices/landing/carousel.slice';
import trackReducer from './slices/landing/track.slice';
import itemReducer from './slices/landing/item.slice';
import landingReducer from './slices/landing/landing.slice';
import playersReducer from './slices/players/players.slice';
import { apiSlice } from './slices/api/api.slice';

export const store = configureStore({
  reducer: {
    navbarMenuDisplay: navBarMenuDisplayReducer,
    carousel: carouselReducer,
    track: trackReducer,
    carouselItem: itemReducer,
    landingState: landingReducer,
    playersState: playersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
