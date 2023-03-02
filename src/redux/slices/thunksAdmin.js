import axios from "axios";

import {
    setMessage,
    getUsers
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