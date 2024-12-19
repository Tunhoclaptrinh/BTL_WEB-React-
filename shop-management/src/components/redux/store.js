import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slides/counterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer
  }
})