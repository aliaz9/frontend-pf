// import axios from "axios";
import { clientAxios } from '../config/clientAxios.js';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_INFO = "GET_PRODUCT_INFO";
export const ADD_USER = "ADD_USER";

export default function getProducts() {

    return async function (dispatch){

    // const json = await axios.get("https://run.mocky.io/v3/dd8097a8-8336-4f15-9237-64f72472faa1");
    //console.log(json.data)
    const { data: { products } } = await clientAxios('/products?number=10')
    console.log("Entra a la action", products)
    return dispatch({
    type: "GET_PRODUCTS",
    payload: products,
    })
}
};


export function getProductInfo(id) {

    return async function (dispatch){

    const  { data } = await  clientAxios(`/products/${id}`);
        console.log(data)
    return dispatch({
    type: "GET_PRODUCT_INFO",
    payload: data,
    })
}
};

export function addUser(payload) {

    return async function (dispatch){
        try {
        const json = await  clientAxios.post('/users/register', payload)

         dispatch({
        type: "ADD_USER",
        payload: json.data,
        })
        dispatch(setMessage(json.data))
        setTimeout(() => {
            dispatch(setMessage({ msg: '', error: null})) 
        },5000);
        } catch (error) {
            dispatch(setMessage(error.response.data))        
        }
    }}


function setMessage (mensaje) {
   return {
    type: 'SET_MESSAGE',
        payload: mensaje
    }

}