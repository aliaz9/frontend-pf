import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice(
  {
    name: 'users',

    initialState: {
      message: { msg: '', error: null },
      productsInCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    },

    reducers: {
      setMessage (state, action) {
        state.message = action.payload
      },
    

      addCart(state, action) {

        for (let i = 0; i < state.productsInCart.length; i++) {
          if (action.payload.id === state.productsInCart.id) {
          return state.productsInCart[i].quantity = state.productsInCart[i].quantity + 1
          }
        }
        action.payload.quantity = 1;
        state.productsInCart = state.productsInCart.concat(action.payload)
      },

      removeCart (state, action) {
        state.productsInCart = state.productsInCart.filter(p => p.id !== action.payload)
      }
    }

  }
)

export const { setMessage, addCart, removeCart } = users.actions

export default users.reducer
