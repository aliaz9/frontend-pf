
import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../slices/productsSlice.js'

export default configureStore({
  reducer: {
    products: productsSlice.reducer
  }
})
