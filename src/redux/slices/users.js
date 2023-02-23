import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: {
    message: { msg: '', error: null }
  },
  reducers: {
    setMessage (state, action) {
      state.message = action.payload
    }
  }
})

export const { setMessage } = users.actions
