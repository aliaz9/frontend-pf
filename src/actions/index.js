import json from '../jsons/products.json'
import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export default function getProducts() {

    // ELIMINO ESTE OBJETO CUANDO TENGA LA RUTA (Alina)
    let ejemplo = [{
        "id": 1,
        "title": "Panel Solar Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        "price": "$2000",
        "score": "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        "image": "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg"
    },
    {
        "id": 2,
        "title": "Panel Dos Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        "price": "$2000",
        "score": "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        "image": "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg"
    },
    {
        "id": 3,
        "title": "Panel Tres Fotovoltaico Policristalino Jinko Solar Eagle 72 celdas 335Wp",
        "price": "$2000",
        "score": "https://static.vecteezy.com/system/resources/previews/004/208/177/non_2x/stars-rating-review-set-of-black-stars-free-vector.jpg",
        "image": "https://pansogal.com/wp-content/uploads/2019/07/funciona-panel-solar-con-nubes-1000x900.jpg"
    }]
    

    return async function (dispatch){

    //const json = await axios.get("");
    
    return dispatch({
    type: "GET_PRODUCTS",
    payload: ejemplo,
    })
}
};