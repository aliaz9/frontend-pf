import { clientAxios } from '../../config/clientAxios.js'
import { toast } from 'react-toastify'
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
  setMyCart,
  restoreCart
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
      toast.success(data.msg)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        toast.error(error.response.data[0].msg)
        return
      }
      toast.error(error.response.data.msg)
    }
  }
}
export const logUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post('/users/user-login', user)
      dispatch(setAuth(data))
      localStorage.setItem('token', data.token)
      const cartOfLS = JSON.parse(localStorage.getItem('cart')) || []
      setTimeout(() => {
        dispatch(updateCart(data.token, cartOfLS))
      }, 2000)
      localStorage.removeItem('cart')
      await dispatch(getCartFromBack())
    } catch (error) {
      toast.error(error.response.data.msg)
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
      toast.success(data.msg)
    } catch (error) {
      toast.error(error.response.data.msg)
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

export const loaderPayment = () => {
  return async (dispatch) => {
    try {
      // const { data } = await clientAxios.post('/payment/paypal', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${localStorage.getItem('token')}`
      //   }
      // })
      // with fetch
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/paypal`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      const data = await response.json()
      console.log(data)
      dispatch(setLinkPayment(data.linkToPay))
    } catch (error) {
      console.log(error)
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
      toast.success(data.msg)
    } catch (error) {
      toast.error(error.response.data.msg)
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
  }
}

export const updateCart = (token, cart) => {
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
      toast.success(data.msg)
    } catch (error) {
      toast.error(error.response.data.msg)
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
      toast.success('Producto agregado al carrito')
    } catch (error) {
      // toast.error('Ha ocurrido un error intenta  mas tarde')
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
      console.log(error.response.data)
    }
  }
}

export const getCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.get('/users/get-cart', config)
      dispatch(setMyCart(data))
      // await console.log(data)
    } catch (error) {
      dispatch(setMessage(error.response.data))
    }
  }
}

export const getCartFromBack = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.get('/users/get-cart', config)
      dispatch(restoreCart(data))
    } catch (error) {
      // toast.error('Ha ocurrido un error intenta  mas tarde')
    }
  }
}
