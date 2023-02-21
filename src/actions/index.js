import axios from 'axios'
import { clientAxios } from '../config/clientAxios.js'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO'
export const ADD_USER = 'ADD_USER'
export const ADD_CART = 'ADD_CART'
export const GET_CART = 'GET_CART'

export default function getProducts() {
  return async function (dispatch) {
    //const products = await axios.get("https://run.mocky.io/v3/dd8097a8-8336-4f15-9237-64f72472faa1");
    //console.log(json.data)
    //const { data: { products } } = await clientAxios('/api/products?number=10')
    const {
      data: { products }
    } = await clientAxios('/products?number=10')
    return dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    })
  }
}

export function getProductInfo(id) {
  return async function (dispatch) {
    const { data } = await clientAxios(`/products/${id}`)

    return dispatch({
      type: 'GET_PRODUCT_INFO',
      payload: data
    })
  }
}

export function addUser(payload) {
  return async function (dispatch) {
    const json = await axios.post(
      'https://run.mocky.io/v3/c6ed0652-776d-476c-b22a-5e0121c66e37',
      payload
    )

    return dispatch({
      type: 'ADD_USER',
      payload: json.data
    })
  }
}

export function addCart(payload) {
  return {
    type: 'ADD_CART',
    payload
  }
}

export function getCart() {
  return async function (dispatch) {
    // CAMBIAR LUEGO POR UNA CONST QUE TRAIGA LOS PRODUCTOS DEL STOREGE
    const {
      data: { products }
    } = await axios.get(
      'https://pf-backend-production-8b24.up.railway.app/api/products?number=3'
    )
    return dispatch({
      type: 'GET_CART',
      payload: products
    })
  }
}

export function setMessage(msg) {
  return function (dispatch) {
    return dispatch({
      type: 'SET_MESSAGE',
      payload: msg
    })
  }
}
export function getByName(product) {
  return async function (dispatch) {
    try {
      const { data } = await clientAxios(`/products?search=${product}`)
    return dispatch({
      type: 'SET_SEARCH',
      payload: data
    })
    } catch (error) {
      console.log(error.response.data)
        setMessage(error.response.data)
    }

  }
}

export function cleanSearch() {
  return function (dispatch) {
    return dispatch({
      type: 'CLEAN_SEARCH',
      payload: []
    })
  }
}
