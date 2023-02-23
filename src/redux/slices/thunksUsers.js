import { clientAxios } from '../../config/clientAxios.js'
import { setMessage } from './users.js'

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
