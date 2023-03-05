import axios from "axios";

import {
    setMessage,
    getUsers,
    setOrderDetail
  } from './adminSlice.js'
  

export const users = () => {
    return async (dispatch) => {
      try {
        const data = await axios.get(`https://run.mocky.io/v3/6d49b3ec-6ba1-4daf-98d8-92178fd8ac32`);
        dispatch(getUsers(data.data))
  
      } catch (error) {
        console.log(error)
        dispatch(setMessage({ error: error.message }))
      } 
    }
  }

  export const getOrderDetail = (id) => {
    return async (dispatch) => {
        try {
        const data = await axios.get(`https://run.mocky.io/v3/e075b095-a366-4d78-a10e-a1cda006a108`, id)
        console.log(data.data)
        dispatch(setOrderDetail(data.data))

        // const { data } = await clientAxios(`admin/orders/${id}`)
        // dispatch(setOrderDetail(data))

        } catch (error) {
            dispatch(setMessage({error: error.message}))
        }
    }
  }