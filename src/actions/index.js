import json from '../jsons/products.json'
import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export default function getProducts() {

    return async function (dispatch){

    const json = await axios.get("https://run.mocky.io/v3/dd8097a8-8336-4f15-9237-64f72472faa1");
    //console.log(json.data)
    
    return dispatch({
    type: "GET_PRODUCTS",
    payload: json.data,
    })
}
};