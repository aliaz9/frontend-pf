import { clientAxios } from '../../config/clientAxios.js'
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
  setEdithPwd,
  setReviews,
  setMyCart
} from './usersSlice.js'
import { alertMsg } from '../../helpers/index.js'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}
const cartOfLS = JSON.parse(localStorage.getItem('cart')) || []
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/users/register', user)
      dispatch(setMessage(data))
      setTimeout(() => {
        dispatch(setMessage({ msg: '', error: null }))
      }, 5000)
    } catch (error) {
      // if (Array.isArray(error.response.data)) {
      //   return dispatch(setMessage(error.response.data[0]))
      // }
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
      clenMesageAfterTime()
      localStorage.removeItem('cart')
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
      const { data } = await clientAxios(`/users/confirm-email/${token}`)
      dispatch(setMessage(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const recoverPassword = (email) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('users/forgot-password', email)
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

      const { data } = await clientAxios.put(
        '/users/edit-user/',
        {
          name,
          email
        },
        config
      )
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
      const { data } = await clientAxios.put(
        '/users/change-password',
        {
          oldPassword: user.oldPassword,
          newPassword: user.newPassword
        },
        config
      )
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
      const { data } = await clientAxios.post(
        '/users/add-to-cart',
        {
          items: product
        },
        config
      )
      dispatch(setLinkPayment(data.link))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const forgotPassword = (token, password) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.put(
        `users/forgot-password/${token}`,
        password
      )
      dispatch(setMessage(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const addToCartBackend = (productId) => {
  console.log(productId)
  return async (dispatch) => {
    try {
      await clientAxios.post(
        '/users/add-to-cart',
        {
          productId
        },
        config
      )
    } catch (error) {
      dispatch(setMessage(error.response.data))
      console.log(error.response.data)
    }
  }
}

export const clenMesageAfterTime = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setMessage({ msg: '', error: null }))
    }, 5000)
  }
}

export const addReviews = (review) => {
  return async (dispatch) => {
    try {
      const { id, rating, reviews } = review
      const { data } = await clientAxios.post(
        `products/reviews/${id}`,
        {
          rating,
          reviews
        },
        config
      )
      dispatch(setReviews(data))
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const getCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.get(
        'users/get-cart',
        config
      )
      dispatch(setMyCart(data))
      // await console.log(data)
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}
