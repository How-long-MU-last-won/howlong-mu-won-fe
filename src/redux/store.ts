import { configureStore } from '@reduxjs/toolkit'
import navBarMenuDisplayReducer from './slices/navbar/navbar-menu-display.slice';

export const store = configureStore({
  reducer: {
    navbarMenuDisplay: navBarMenuDisplayReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch