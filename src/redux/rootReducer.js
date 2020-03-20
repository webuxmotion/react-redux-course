import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer'
import { appReducer } from './appReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  users: usersReducer
})