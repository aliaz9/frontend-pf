
import { configureStore } from '@reduxjs/toolkit'
import { users } from '../slices/users.js'
import { productsSlice } from '../slices/productsSlice.js'

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: users.reducer
  }
})
