import { clientAxios } from '../../config/clientAxios.js'
import { addCantidad, setCart, setMessage } from './usersSlice.js'

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/users/register', user)
      dispatch(setMessage(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const logUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/auth/login', user)
      dispatch(setMessage(data))
      localStorage.setItem('token', data.token)
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const addCart = (product) => {
  return (dispatch, getState) => {
    const { users: { productsInCart } } = getState()
    const copia = [...productsInCart]
    if (copia.some(el => el.id === product.id)) {
      dispatch(addCantidad(product))
      return
    }
    dispatch(setCart(product))
  }
}
