import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductInfo } from "../../actions";
import '../product-page/product-page.css';

export default function ProductPage() {

let productInfo = useSelector((state) => state.productInfo)
let dispatch = useDispatch();
const params = useParams()
// console.log( props.match.params.id)
// console.log(id)
const { id }   = params
useEffect(() => {
    dispatch(getProductInfo(id))
    // console.log('En los detalles')
}, [dispatch, id])

    return (
        <div className="pp-container" key={productInfo.id}>
            <div className="card-wrapper">
            <img src={productInfo.image} alt={productInfo.name} className="pp-image" />
            <div className="pp-product-content"> 
            <h1 className="pp-title">{productInfo.name}</h1>
            <p className="pp-price">{productInfo.price}</p>
            <button className="pp-button">ADD TO CART</button>
            <p className="pp-description">{productInfo.description}</p>
            <p className="pp-type">{productInfo.typeName}</p>
            <p className="pp-brand">{productInfo.brandName}</p>
            </div>
            </div>
        </div>
    )
}