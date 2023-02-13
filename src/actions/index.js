import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
//import products from '../jsons/products.json'


export default function getProducts() {
return function (dispatch){

    const products = "scr/jsons/products.json";
    axios.get(products)
    .then(response => console.log("hola", response))

    return dispatch({
    type: "GET_PRODUCTS",
    payload: products.data,
    })
}
};