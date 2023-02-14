import { GET_PRODUCTS, GET_PRODUCT_INFO } from "../actions";

const initialState = {
products: [],
productInfo: "",
};

export default function reducer(state = initialState, action) {

if(action.type === GET_PRODUCTS) {
    return {
        ...state,
        products: action.payload,
    }
}

if(action.type === GET_PRODUCT_INFO) {

    console.log("entra en el reducer")
    return {
        ...state,
        productInfo: action.payload,
    }

}

return state;

};