import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSice'

export const store = configureStore({
  reducer: {
    auth:authSlice,
  },
})

export default store;