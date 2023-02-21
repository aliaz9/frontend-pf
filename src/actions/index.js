import axios from "axios";
import { clientAxios } from '../config/clientAxios.js';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_INFO = "GET_PRODUCT_INFO";
export const ADD_USER = "ADD_USER";
export const ADD_CART = "ADD_CART";
export const GET_CART = "GET_CART";

export default function getProducts() {

    return async function (dispatch){

    //const products = await axios.get("https://run.mocky.io/v3/dd8097a8-8336-4f15-9237-64f72472faa1");
    //console.log(json.data)
    //const { data: { products } } = await clientAxios('/api/products?number=10')
    const { data: { products } } = await axios.get('https://pf-backend-production-8b24.up.railway.app/api/products?number=10')
    console.log("Entra a la action", products)
    return dispatch({
    type: "GET_PRODUCTS",
    payload: products,
    })
}
};


export function getProductInfo(id) {

    return async function (dispatch){

    //const  { data } = await  clientAxios(`/api/products/${id}`);
    const { data } = await axios.get(`https://pf-backend-production-8b24.up.railway.app/api/products/${id}`)

    console.log(data)
    
    return dispatch({
    type: "GET_PRODUCT_INFO",
    payload: data,
    })
}
};

export function addUser(payload) {

    return async function (dispatch){

        const json = await axios.post("https://run.mocky.io/v3/c6ed0652-776d-476c-b22a-5e0121c66e37", payload);
        console.log("Entra a la action", json.data)
        
        return dispatch({
        type: "ADD_USER",
        payload: json.data,
        })
    }}

export function addCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}

export function getCart() {
return async function (dispatch) {

// CAMBIAR LUEGO POR UNA CONST QUE TRAIGA LOS PRODUCTOS DEL STOREGE
const { data: { products } } = await axios.get('https://pf-backend-production-8b24.up.railway.app/api/products?number=3')
    return dispatch({
        type: 'GET_CART',
        payload: products,
    })
}}