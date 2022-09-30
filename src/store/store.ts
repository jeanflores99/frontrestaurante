import { configureStore } from '@reduxjs/toolkit'
import { Reducers } from './combineReducer'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
    reducer: Reducers,
    // devTools: false
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(() => store)