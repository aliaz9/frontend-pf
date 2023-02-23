import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCart } from '../redux/slices/usersSlice.js'
import generateHash from '../utils/genKeys.js'
// import { addCart, removeCart } from '../../actions'
// import '../cart/cart.css'

export default function Cart () {
  const productsInCart = useSelector((state) => state.users.productsInCart)
  console.log(productsInCart)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsInCart))
  }, [productsInCart])

  function handleClose (id) {
    dispatch(removeCart(id))
  }

  function addOne (payload) {
    // dispatch(ad(payload))
    console.log('add')
  }

  function removeOne () {
    console.log('remove')
  }

  return (

    <div className="body">

      <div className="row">
        <div className="col-4" >Product</div>
        <div className="col-4">Cantidad</div>
        <div className="col-4">Precio</div>
      </div>

      {
        productsInCart.map(p => {
          return (

            <div className="row" key={p.id}>
              <div className="col-4" >
                <img src={p.image} className="cart-image" />
                <div className="container-data">
                  <p className="title">{p.title} </p>
                  <p className="title">{p.price}</p>
                  <button className="remove-btn" onClick={() => handleClose(p.id)}>X</button>
                </div>
              </div>
              <div className="col-4">
                <p className="title"> 1 </p>
                <button onClick={() => addOne({ id: p.id, name: p.name, price: p.price, image: p.image })}>+</button>
                <button onClick={() => removeOne(p.id)}>-</button>
              </div>
              <div className="col-4">
                {<p>{p.price * 2}</p>}
              </div>
            </div>
          )
        })
      }

      <div>

      </div>

      <div> <p>Impuestos: XXX</p> </div>
      <div> <p>Total: XXX </p></div>

      <Link to='/checkout'>
      <button>Finalizar Compra</button>
      </Link>
    </div>
  )
}
