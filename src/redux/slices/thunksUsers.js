import { clientAxios } from '../../config/clientAxios.js'
import { addOne, lessOne, removeCart, setAuth, setCart, setLinkPayment, setMessage, setUserLoading } from './usersSlice.js'
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/users/register', user)
      dispatch(setMessage(data))
      setTimeout(() => {
        dispatch(setMessage({ msg: '', error: null }))
      }, 5000)
    } catch (error) {
      dispatch(setMessage(error.response.data))

      setTimeout(() => {
        dispatch(setMessage({ msg: '', error: null }))
      }, 5000)
    }
  }
}
export const logUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/auth/login', user)
      // dispatch(setMessage(data))
      dispatch(setAuth(data))
      localStorage.setItem('token', data.token)
      setTimeout(() => {
        dispatch(setMessage({ msg: '', error: null }))
      }, 5000)
    } catch (error) {
      dispatch(setMessage(error.response.data))
      setTimeout(() => {
        dispatch(setMessage({ msg: '', error: null }))
      }, 5000)
    }
  }
}

export const addCart = (product) => {
  return (dispatch, getState) => {
    const { users: { productsInCart } } = getState()
    if (productsInCart.some(el => el.id === product.id)) {
      dispatch(addOne(product))
      return
    }
    dispatch(setCart(product))
  }
}

export const remove = (product) => {
  return (dispatch) => {
    if (product.cantidad === 1) {
      dispatch(removeCart(product.id))
      return
    }
    dispatch(lessOne(product.id))
  }
}

export const autehnticateUser = (config) => {
  return async (dispatch) => {
    try {
      dispatch(setUserLoading(true))
      const { data } = await clientAxios('/users/profile', config)
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error)
    }
    dispatch(setUserLoading(false))
  }
}

export const confirmUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios(`/users/confirm/${token}`)
      dispatch(setMessage(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const recoverPassword = (email) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/users/reset-password/', email)
      dispatch(setMessage(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const loaderPayment = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('user/payment', product)
      dispatch(setLinkPayment(data.link))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}
