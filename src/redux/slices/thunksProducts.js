import { clientAxios } from '../../config/clientAxios.js'
import {
  loading,
  setMessage,
  setProducts,
  setProduct,
  setTypes,
  setBrands,
  setNumberOfpages,
  setSearch
} from './productsSlice.js'

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true))
      const {
        products: { pageCurrent, brand, type, order }
      } = getState()
      const {
        data: { products, count }
      } = await clientAxios(
        `/products?number=12&page=${pageCurrent}&brandName=${brand.label}&typeName=${type.label}&order=${order}`
      )
      if (brand.value || type.value) {
        dispatch(setNumberOfpages(Math.ceil(count / 12)))
      }
      dispatch(setProducts(products))
    } catch (error) {
      dispatch(setMessage({ error: error.message }))
    } finally {
      dispatch(loading(false))
    }
  }
}

export const getProductsDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const { data } = await clientAxios(`/products/${id}`)
      dispatch(setProduct(data))
    } catch (error) {
      dispatch(setMessage({ error: error.message }))
    } finally {
      dispatch(loading(false))
    }
  }
}

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios('/products/types')
      const types = data.map(({ name }) => ({ label: name, value: name }))
      dispatch(setTypes(types))
    } catch (error) {
      dispatch(setMessage(error.message))
    }
  }
}

export const getBrands = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios('/brands')
      const brands = data.map(({ name }) => ({ value: name, label: name }))
      dispatch(setBrands(brands))
    } catch (error) {
      dispatch(setMessage(error.message))
    }
  }
}

export const getByNames = (name) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const { data } = await clientAxios(`/products?search=${name}`)
      dispatch(setSearch(data))
    } catch (error) {
      dispatch(setMessage(error.message))
    } finally {
      dispatch(loading(false))
    }
  }
}

export const createProducts = async (formData) => {
  // return async (dispatch) {
  try {
    const result = await clientAxios.post('/products', formData, {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    return result
  } catch (error) {
    dispatch(setMessage(error.message))
  }
}
// }
