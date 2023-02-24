import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { addCart, getProductInfo } from '../../actions'
// import '../product-page/product-page.css'
import { getProductsDetails } from '../redux/slices/thunksProducts.js'
import { addCart } from '../redux/slices/thunksUsers.js'

export default function ProductPage () {
  // const productsInCart = useSelector((state) => state.users.productsInCart)

  // useEffect(() => {
  // localStorage.setItem("cart", JSON.stringify(productsInCart) )
  // }, [productsInCart])

  const productInfo = useSelector((state) => state.products.product)
  const dispatch = useDispatch()
  const params = useParams()
  function handleAddCart () {
    const productToAdd = {
      id: productInfo.id,
      // title: productInfo.title,
      // title: productInfo.name,
      price: productInfo.price,
      cantidad: 1
    }
    dispatch(addCart(productToAdd))
  }
  const { id } = params
  useEffect(() => {
    dispatch(getProductsDetails(id))
    console.log('Al cargar', productInfo)
  }, [dispatch, id])

  // function handleClick (payload) {
  //   const filtered = productsInCart.filter(p => p.id === payload.id)
  //   // console.log("ya estaba en carrito", filtered)

  //   if (!filtered) {
  //     console.log('Agregarlo nuevo')
  //   } else {
  //     console.log('Sumarle 1')
  //   }
  //   dispatch(addCart(payload))
  //   localStorage.setItem('cart', JSON.stringify(productsInCart))
  //   // console.log(payload)
  // }

  return (
        <div className="pp-container" key={productInfo.id}>
            <div className="card-wrapper">
                <img src={productInfo.image} alt={productInfo.title} className="pp-image" />
                <div className="pp-product-content">
                    <h1 className="pp-title">{productInfo.title}</h1>
                    <p className="pp-price">{productInfo.price}</p>
                    {/* <button className="pp-button" onClick={() => dispatch(addCart({name: productInfo.name, price: productInfo.price}))}>ADD TO CART</button> */}
                    <button className="pp-button" onClick={() => handleAddCart()}>ADD TO CART</button>

                    <p className="pp-description">{productInfo.description}</p>
                    <p className="pp-type">{productInfo.type}</p>
                    <p className="pp-brand">{productInfo.brand}</p>
                </div>
            </div>
        </div>
  )
}
