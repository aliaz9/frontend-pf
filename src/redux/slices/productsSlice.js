import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    message: {},
    loading: false,
    search: [],
    product: {}
  },
  reducers: {
    setMessage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.message = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    loading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { loading, setMessage, setProducts, setProduct } = productsSlice.actions
