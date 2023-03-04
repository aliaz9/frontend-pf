import { clientAxios } from '../../config/clientAxios.js'
import Swal from 'sweetalert2';
import {
  addOne,
  lessOne,
  removeCart,
  setAuth,
  setCart,
  setLinkPayment,
  setMessage,
  setUserLoading,
  setEdithUser,
  setEdithPwd
} from './usersSlice.js'
import { alertMsg } from '../../helpers/index.js';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

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
      const { data } = await clientAxios.post('/users/user-login', user)
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
    const {
      users: { productsInCart }
    } = getState()
    if (productsInCart.some((el) => el.id === product.id)) {
      dispatch(addOne(product))
      return
    }
    dispatch(setCart(product))
  }
}

export const remove = (product) => {
  return (dispatch) => {
    if (product.quantity === 1) {
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
      const { data } = await clientAxios('/users/user-profile', config)
      dispatch(setAuth(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
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

export const editUser = (user) => {
  return async (dispatch) => {
    try {
      const { name, email } = user
      dispatch(setUserLoading(true))
      dispatch(setEdithUser({ name, email }))

      const { data } = await clientAxios.put('/users/edit-user/', {
        name,
        email
      }, config)
      dispatch(setMessage(data.msg))
      alertMsg('Actualizado!!!', data.msg, 'success')
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
    dispatch(setUserLoading(false))
  }
}

export const changePassword = (user) => {
  return async (dispatch) => {
    try {
      // const { oldPassword, newPassword } = user
      dispatch(setUserLoading(true))
      // dispatch(setEdithUser({ oldPassword, newPassword }))
      dispatch(setEdithPwd(user.newPassword))
      const { data } = await clientAxios.put('/users/change-password', {
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      }, config)
      dispatch(setMessage(data.msg))
      alertMsg('Actualizado!!!', data.msg, 'success')
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
    dispatch(setUserLoading(false))
  }
}

export const loaderPayment = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('user/payment', {
        items: product
      })
      dispatch(setLinkPayment(data.link))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}
