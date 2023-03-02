import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: {
    message: { msg: '', error: null },
    productsInCart: JSON.parse(localStorage.getItem('cart')) || [],
    auth: {},
    loading: false,
    linkPayment: '',
    allUsers: []
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
    getUsers: (state, action) => {
      state.allUsers = action.payload
    }
  }
  // reducers: {
  //   setMessage (state, action) {
  //     state.message = action.payload
  //   },
  //   removeCart (state, action) {
  //     state.productsInCart = state.productsInCart.filter(p => p.id !== action.payload)
  //   },
  //   setCart (state, action) {
  //     state.productsInCart = [...state.productsInCart, action.payload]
  //   },
  //   addOne (state, action) {
  //     state.productsInCart = state.productsInCart.map(p => {
  //       if (p.id === action.payload.id) {
  //         p.cantidad = p.cantidad + 1
  //       }
  //       return p
  //     })
  //   },
  //   lessOne (state, action) {
  //     state.productsInCart = state.productsInCart.map(p => {
  //       if (p.id === action.payload) {
  //         p.cantidad = p.cantidad - 1
  //       }
  //       return p
  //     })
  //   },
  //   setAuth (state, action) {
  //     state.auth = action.payload
  //   },
  //   setUserLoading (state, action) {
  //     state.loading = action.payload
  //   },
  // setEdithUser: (state, action) => {
  //   const { name, email } = action.payload
  //   state.auth.name = name
  //   state.auth.email = email

  // }
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
  getUsers
} = users.actions

export default users.reducer
