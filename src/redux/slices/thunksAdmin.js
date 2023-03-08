import axios from 'axios'
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
      const { data } = await axios.get(
        'https://run.mocky.io/v3/cfa338a1-4cb6-4984-9452-7ecb07f21362'
      )

      uid
        ? dispatch(getOrders(data.filter((o) => o.uid === uid)))
        : dispatch(getOrders(data))
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
      console.log(id)
      await clientAxios.put(`/admin/enable-user/${id}`, config)
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
