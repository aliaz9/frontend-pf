import axios from 'axios'
import { toast } from 'react-toastify'
import { clientAxios } from '../../config/clientAxios.js'
import {
  setMessage,
  getUsers,
  getOrders,
  getProduts,
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
      const { data } = await clientAxios('/admin/users', config)
      dispatch(getUsers(data))
      // const { data } = await axios.get(
      //   'https://run.mocky.io/v3/6d49b3ec-6ba1-4daf-98d8-92178fd8ac32'
      // )

      // if (filteroption === 'habilitados')
      //   dispatch(getUsers(data.filter((u) => u.disabled === true)))
      // if (filteroption === 'deshabilitados')
      //   dispatch(getUsers(data.filter((u) => u.disabled === false)))
      // if (!filteroption) dispatch(getUsers(data))
    } catch (error) {
      dispatch(setMessage({ error: error.response.data }))
    }
  }
}

export const orders = (uid) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios('/admin/orders', config)
      dispatch(getOrders(data))
      // uid
      //   ? dispatch(getOrders(data.filter((o) => o.uid === uid)))
      //   : dispatch(getOrders(data))
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
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
      const res = await clientAxios.delete(
        `/admin/delete-product/${id}`,
        config
      )
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
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return result
  } catch (error) {
    return error
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.delete(
        `/admin/delete-user/${id}`,
        config
      )
      toast.success(data.msg)
      dispatch(eliminateUser(id))
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }
}

export const habilitarUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await clientAxios.post(
        `/admin/enable-user/${id}`,
        config
      )
      toast.success(data.msg)
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

export const filterUser = (filtro) => {
  return async (dispatch) => {
    if (filtro === 'habilitados') {
      const { data } = await clientAxios('/admin/users-enabled', config)
      dispatch(getUsers(data))
    }
    if (filtro === 'deshabilitados') {
      const { data } = await clientAxios('/admin/users-disabled', config)
      dispatch(getUsers(data))
    }
    if (filtro === 'todos') {
      dispatch(users())
    }
  }
}
