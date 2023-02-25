import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice(
  {
    name: 'users',

    initialState: {
      message: { msg: '', error: null },
      productsInCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },

    reducers: {
      setMessage (state, action) {
        state.message = action.payload
      },

      removeCart (state, action) {
        state.productsInCart = state.productsInCart.filter(p => p.id !== action.payload)
      },
      setCart (state, action) {
        state.productsInCart = [...state.productsInCart, action.payload]
      },
      addOne (state, action) {
        state.productsInCart = state.productsInCart.map(p => {
          if (p.id === action.payload.id) {
            p.cantidad = p.cantidad + 1
          }
          return p
        })
      },
      lessOne (state, action) {
        state.productsInCart = state.productsInCart.map(p => {
          if (p.id === action.payload) {
            p.cantidad = p.cantidad - 1
          }
          return p
        })
      }
    }
  }
)

export const { setMessage, setCart, removeCart, addOne, lessOne } = users.actions

export default users.reducer
