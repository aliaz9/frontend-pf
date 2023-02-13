import getProducts, { GET_PRODUCTS } from "../actions";

const initialState = {
products: [],
};

export default function reducer(state = initialState, action) {

if(action.type === GET_PRODUCTS) {

    return {
        ...state,
        products: action.payload,
    }

}


return state;

};