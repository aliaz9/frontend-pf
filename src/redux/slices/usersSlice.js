import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: {
    message: { msg: '', error: null },
    productsInCart: JSON.parse(localStorage.getItem('cart')) || [],
    auth: { name: '', email: '', role: ' ' },
    loading: false,
    linkPayment: ''
  },

  reducers: {
    setMessage(state, action) {
      state.message = action.payload
    },
    removeCart(state, action) {
      state.productsInCart = state.productsInCart.filter(
        (p) => p.id !== action.payload
      )
    },
    setCart(state, action) {
      state.productsInCart = [...state.productsInCart, action.payload]
    },
    addOne(state, action) {
      state.productsInCart = state.productsInCart.map((p) => {
        if (p.id === action.payload.id) {
          p.quantity = p.quantity + 1
        }
        return p
      })
    },
    lessOne(state, action) {
      state.productsInCart = state.productsInCart.map((p) => {
        if (p.id === action.payload) {
          p.quantity = p.quantity - 1
        }
        return p
      })
    },
    setAuth(state, action) {
      state.auth = action.payload
    },
    setUserLoading(state, action) {
      state.loading = action.payload
    },
    setLinkPayment(state, action) {
      state.linkPayment = action.payload
    },
    setEdithUser: (state, action) => {
      const { name, email } = action.payload
      state.auth.name = name
      state.auth.email = email
    },
    setEdithPwd: (state, action) => {
      const { newPassword } = action.payload
      state.auth.password = newPassword
    },
    restoreCart: (state, action) => {
      state.productsInCart = []
    }
  }
})

export const {
  setMessage,
  setCart,
  removeCart,
  addOne,
  lessOne,
  setAuth,
  setUserLoading,
  setLinkPayment,
  setEdithUser,
  setEdithPwd,
  restoreCart
} = users.actions

export default users.reducer
