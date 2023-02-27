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
    order: {value:'', label:'' },
    brand: { value: '', label: '' },
    type: { value: '', label: '' },
    numberOfpages: 10,
    pageCurrent: 1
  },
  reducers: {
    setMessage: (state, action) => {
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
<<<<<<< HEAD
    setOrder (state, action) {
      state.order = action.payload
    },
    cleanSearch (state) {
      state.search = []
    },
    setSearch (state, action) {
      state.search = action.payload
=======
    setOrder: (state, action) => {
      state.order = action.payload
>>>>>>> origin/pagination
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
<<<<<<< HEAD
  setOrder,
  setSearch,
  cleanSearch
=======
  setOrder
>>>>>>> origin/pagination
} = productsSlice.actions
