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
  setReviews
} from './usersSlice.js'
import { alertMsg } from '../../helpers/index.js'

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
      // if (Array.isArray(error.response.data)) {
      //   return dispatch(setMessage(error.response.data[0]))
      // }
      console.log(error.response.data)
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
      cleanMessage()
      const cartOfLS = JSON.parse(localStorage.getItem('cart')) || []
      dispatch(updateCart(data.token, cartOfLS))
      localStorage.removeItem('cart')
    } catch (error) {
      // dispatch(setMessage(error.response.data))
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
      // dispatch(setMessage(error.response.data))
      console.log(error)
    }
    dispatch(setUserLoading(false))
  }
}

export const confirmUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios(`/users/confirm-email-email/${token}`)
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
      const { data } = await clientAxios.post('payment/paypal', config)
      dispatch(setLinkPayment(data.linkToPay))
    } catch (error) {
      console.log(error)
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

export const cleanMessage = () => {
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

export const updateCart = (token, cart) => {
  console.log(cart)
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.put(
        '/users/update-cart',
        { cart },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      dispatch(setMessage(data))
      cleanMessage()
    } catch (error) {
      console.log(error)
    }
  }
}

export const addCartBack = (id) => {
  return async () => {
    try {
      const { data } = await clientAxios.post(
        '/users/add-to-cart',
        {
          productId: id
        },
        config
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeCartBack = (id) => {
  console.log(localStorage.getItem('token'))
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post(
        '/users/less-to-cart',
        {
          productId: id
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      dispatch(setMessage(data.msg))
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
    }

  }
}
