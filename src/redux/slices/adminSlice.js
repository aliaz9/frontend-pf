import { createSlice } from '@reduxjs/toolkit'

export const admin = createSlice({
  name: 'admin',
  initialState: {
    message: { msg: '', error: null },
    allUsers: [],
    orderDetail: {},
    allOrders: []
  },

  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload
    },
    getUsers: (state, action) => {
      state.allUsers = action.payload
    },
    setOrderDetail: (state, action) => {
        state.orderDetail = action.payload
    },
    getOrders: (state, action) => {
      state.allOrders = action.payload
    }
  }
})


export const { setMessage, getUsers, getOrders, setOrderDetail } = admin.actions

export default admin.reducer
