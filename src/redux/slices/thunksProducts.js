import { clientAxios } from '../../config/clientAxios.js'
import {
  loading,
  setMessage,
  setProducts,
  setProduct,
  setTypes,
  setBrands,
<<<<<<< HEAD
  setNumberOfpages
=======
  setNumberOfpages,
  setSearch
>>>>>>> 51c702bc57624eeee5245dee28961839d9ece6be
} from './productsSlice.js'

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true))
      const {
<<<<<<< HEAD
        products: { pageCurrent, type, order }
=======
        products: { pageCurrent, brand, type, order }
>>>>>>> 51c702bc57624eeee5245dee28961839d9ece6be
      } = getState()
      const {
        data: { products, count }
      } = await clientAxios(
<<<<<<< HEAD
        `/products?page=${pageCurrent}&typeName=${type.label}&order=${order.label}`
      )
      if (type.value) {
        dispatch(setNumberOfpages(Math.ceil(count / 9)))
=======
        `/products?number=12&page=${pageCurrent}&brandName=${brand.label}&typeName=${type.label}&order=${order}`
      )
      if (brand.value || type.value) {
        dispatch(setNumberOfpages(Math.ceil(count / 12)))
>>>>>>> 51c702bc57624eeee5245dee28961839d9ece6be
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
      const { data } = await clientAxios('/types')
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
<<<<<<< HEAD
=======

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
>>>>>>> 51c702bc57624eeee5245dee28961839d9ece6be
