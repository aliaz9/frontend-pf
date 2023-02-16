import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_INFO = "GET_PRODUCT_INFO";
export const ADD_USER = "ADD_USER";


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

export function getProductInfo() {

    return async function (dispatch){

    const json = await axios.get("https://run.mocky.io/v3/c6ed0652-776d-476c-b22a-5e0121c66e37");
    console.log("Entra a la action", json.data)
    
    return dispatch({
    type: "GET_PRODUCT_INFO",
    payload: json.data,
    })
}
};


// REVISAR ACTION
export function addUser(payload) {

    return async function (dispatch){

        const json = await axios.post("https://run.mocky.io/v3/c6ed0652-776d-476c-b22a-5e0121c66e37", payload);
        console.log("Entra a la action", json.data)
        
        return dispatch({
        type: "ADD_USER",
        payload: json.data,
        })
    }}