import { configureStore } from '@reduxjs/toolkit'
import darkReducer from './modeDark/darkSlide.ts'

export default configureStore({
  reducer: {
    dark: darkReducer
  },
})