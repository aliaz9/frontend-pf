import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    message: {},
    loading: false,
    search: [],
    product: {},
    types: [],
    brands: [],
    order: { value: '', label: '' },
    brand: { value: '', label: '' },
    type: { value: '', label: '' },
    numberOfpages: 10,
    pageCurrent: 1
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
    },
    setTypes: (state, action) => {
      state.types = action.payload
    },
    setBrands: (state, action) => {
      state.brands = action.payload
    },
    setPageCurrent: (state, action) => {
      state.pageCurrent = action.payload
    },
    setBrand: (state, action) => {
      state.brand = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
    setNumberOfpages: (state, action) => {
      state.numberOfpages = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  loading,
  setMessage,
  setProducts,
  setProduct,
  setBrands,
  setTypes,
  setPageCurrent,
  setBrand,
  setType,
  setNumberOfpages,
  setOrder
} = productsSlice.actions
