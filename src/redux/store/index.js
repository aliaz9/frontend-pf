import { configureStore } from '@reduxjs/toolkit'
import { users } from '../slices/usersSlice.js'
import { productsSlice } from '../slices/productsSlice.js'
import { admin } from '../slices/adminSlice.js'

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
    users: users.reducer,
    admin: admin.reducer
  }
})
