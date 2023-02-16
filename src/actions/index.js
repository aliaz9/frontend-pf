import axios from "axios";
import { clientAxios } from '../config/clientAxios.js';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_INFO = "GET_PRODUCT_INFO";

export default function getProducts() {

    return async function (dispatch){

    // const json = await axios.get("https://run.mocky.io/v3/dd8097a8-8336-4f15-9237-64f72472faa1");
    //console.log(json.data)
    const { data: { products } } = await clientAxios('/api/products?number=10')
    console.log("Entra a la action", products)
    return dispatch({
    type: "GET_PRODUCTS",
    payload: products,
    })
}
};


export function getProductInfo(id) {

    return async function (dispatch){

    const  { data } = await  clientAxios(`/api/products/${id}`);
        console.log(data)
    return dispatch({
    type: "GET_PRODUCT_INFO",
    payload: data,
    })
}
};