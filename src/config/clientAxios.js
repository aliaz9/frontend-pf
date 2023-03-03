import axios from 'axios'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}
export const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL
})

export const clientAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  config
})
