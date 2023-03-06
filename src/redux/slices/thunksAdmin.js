import axios from 'axios'
import { clientAxios } from '../../config/clientAxios.js'

import { setMessage, getUsers, getOrders, eliminateUser } from './adminSlice.js'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export const users = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios('/admin/users', config)
      //const { data } = await axios.get(`https://run.mocky.io/v3/6d49b3ec-6ba1-4daf-98d8-92178fd8ac32`);
      dispatch(getUsers(data))
    } catch (error) {
      dispatch(setMessage({ error: error.response.data }))
    }
  }
}

export const orders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://run.mocky.io/v3/cfa338a1-4cb6-4984-9452-7ecb07f21362`
      )
      
      //const { data } = await clientAxios('xxxxx', config)

      dispatch(getOrders(data))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { user } = await clientAxios(`/admin/delete-user/${id}`, config)
      dispatch(eliminateUser(user))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}