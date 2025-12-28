import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './titleSlice'

export const sharedInitialState = {
    "siteTitle": "",
    "listFilet": "",
    "lists": []
}

export const store = configureStore({
  reducer: {
    title: titleReducer
  },
})