import axios from 'axios'
import { clientAxios } from '../../config/clientAxios.js'

import { setMessage, getUsers, getOrders } from './adminSlice.js'

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
      dispatch(getUsers(data))
    } catch (error) {
      dispatch(setMessage({ error: error.response.data }))
    }
  }
}

export const orders = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        `https://run.mocky.io/v3/cfa338a1-4cb6-4984-9452-7ecb07f21362`
      )
      dispatch(getOrders(data.data))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}
