import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductInfo } from "../../actions";
import Nav from "../nav/nav";
import '../product-page/product-page.css';

export default function ProductPage() {

let productInfo = useSelector((state) => state.productInfo)
let dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductInfo())
}, [dispatch])

    return (
        <div className="pp-container" key={productInfo.id}>
            <div className="card-wrapper">
            <img src={productInfo.image} alt={productInfo.title} className="pp-image" />
            <div className="pp-product-content"> 
            <h1 className="pp-title">{productInfo.title}</h1>
            <p className="pp-price">{productInfo.price}</p>
            <button className="pp-button">ADD TO CART</button>
            <p className="pp-description">{productInfo.description}</p>
            <p className="pp-type">{productInfo.type}</p>
            <p className="pp-brand">{productInfo.brand}</p>
            </div>
            </div>
        </div>
    )
}