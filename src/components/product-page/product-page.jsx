import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductInfo } from "../../actions";
import Style from "./product-page.module.css"
import Questions from "../questions/questions";

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
        <div className={Style.container}>
            <h1>Detalles del producto</h1>

            <div className={Style.containerAll} key={productInfo.id}>

            <div className={Style.containerImg}>
                <img src={productInfo.image} alt={productInfo.name} className={Style.image} />
            </div>


            <div className={Style.productContent}> 
                <h1 className={Style.title}>{productInfo.name}</h1>
                <p className={Style.price}>${productInfo.price}</p>
                <div className={Style.stars}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                <button className={Style.button}>Agregar al carrito</button>
                <p className={Style.description}>{productInfo.description}</p>
                <div className={Style.protectContainer}>
                    <h4>Compra segura</h4>
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <p className={Style.type}>{productInfo.type}</p>
                <p className={Style.brand}>{productInfo.brand}</p>
            </div>

                </div>
                <Questions />
        </div>
    )
}