import axios from 'axios'
import { clientAxios } from '../../config/clientAxios.js'

import { setMessage, getUsers, getOrders, getProduts } from './adminSlice.js'

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

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios('/admin/products', config)
      dispatch(getProduts(data))
    } catch (error) {
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const deletProduct = (id) => {
  return async (dispatch) => {
    try {
      const res = await clientAxios.delete(`/admin/delete-product/${id}`)
      const { data } = await clientAxios('/admin/products', config)
      dispatch(getProduts(data))
      return res.data.msg
    } catch (error) {
      dispatch(setMessage({ error: error.message }))
    }
  }
}

export const createProducts = async (formData) => {
  try {
    const result = await clientAxios.post('/admin/create-product', formData, {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    return result
  } catch (error) {
    return error
  }
}
