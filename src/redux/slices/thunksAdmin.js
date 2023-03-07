import axios from 'axios'
import { clientAxios } from '../../config/clientAxios.js'

import {
  setMessage,
  getUsers,
  getOrders,
  eliminateUser,
  setOrderDetail,
  habilitarUsuario
} from './adminSlice.js'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export const users = () => {
  return async (dispatch) => {
    try {
      //const { data } = await clientAxios('/admin/users', config)
      const { data } = await axios.get("https://run.mocky.io/v3/6d49b3ec-6ba1-4daf-98d8-92178fd8ac32")
      

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
        'https://run.mocky.io/v3/cfa338a1-4cb6-4984-9452-7ecb07f21362'
      )
      dispatch(getOrders(data.data))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await clientAxios.delete(`/admin/delete-user/${id}`, config)
      dispatch(eliminateUser(id))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const habilitarUser = (id) => {
  return async (dispatch) => {
    try {
      // await clientAxios.delete(`//${id}`, config)
      dispatch(habilitarUsuario(id))
    } catch (error) {
      console.log(error)
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const getOrderDetail = (id) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        'https://run.mocky.io/v3/e075b095-a366-4d78-a10e-a1cda006a108',
        id
      )
      console.log(data.data)
      dispatch(setOrderDetail(data.data))

      // const { data } = await clientAxios(`admin/orders/${id}`)
      // dispatch(setOrderDetail(data))
    } catch (error) {
      dispatch(setMessage({ error: error.message }))
    }
  }
}
