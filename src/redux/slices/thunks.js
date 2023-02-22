import { clientAxios } from '../../config/clientAxios.js'
import { loading, setMessage, setProducts, setProduct } from './productsSlice.js'

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const { data } = await clientAxios('/products')
      dispatch(setProducts(data))
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
