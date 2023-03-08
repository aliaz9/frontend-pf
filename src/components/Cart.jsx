import { replace } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addCart,
  addCartBack,
  loaderPayment,
  remove,
  removeCartBack
} from '../redux/slices/thunksUsers.js'
import { removeCart, setLinkPayment } from '../redux/slices/usersSlice.js'

// import { removeCart } from '../redux/slices/usersSlice.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/Cart.css'

export default function Cart() {
  // const navigate = useNavigate()
  const link = useSelector((state) => state.users.linkPayment)
  const productsInCart = useSelector((state) => state.users.productsInCart)
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.users.auth)
  function handleAddCart(product) {
    dispatch(addCart(product))

    if (auth.name) {
      dispatch(addCartBack(product.id))
    }
  }

  function removeOne(product) {
    dispatch(remove(product))
    if (auth.name) {
      dispatch(removeCartBack(product.id))
    }
  }
  useEffect(() => {
    if (link) {
      window.location.href = link
      dispatch(setLinkPayment(''))
    }
  }, [link])
  function total() {
    let total = 0
    for (let i = 0; i < productsInCart.length; i++) {
      const subtotal = productsInCart[i].price * productsInCart[i].quantity
      total = total + subtotal
    }
    return total
  }

  function handlePayment() {
    dispatch(loaderPayment())
  }

  return (
    <div className="background">
      <div className="row">
        <div className="col-4">Producto</div>
        <div className="col-4">Cantidad</div>
        <div className="col-4">Precio</div>
      </div>

      {productsInCart.map((p) => {
        return (
          <div className="row" key={p.id}>
            <div className="col-4">
              <img src={p.image} className="cart-image" alt="imagen-carrito" />
              <div className="container-data">
                <p className="title">{p.title} </p>
                <p className="title">{p.price}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(removeCart(p.id))}
                >
                  x
                </button>
              </div>
            </div>
            <div className="col-4">
              <p className="title"> {p.quantity} </p>
              <button className="btn btn-info" onClick={() => handleAddCart(p)}>
                +
              </button>
              <button className="btn btn-info" onClick={() => removeOne(p)}>
                -
              </button>
            </div>
            <div className="col-4">{<p>{p.price * p.quantity}</p>}</div>
          </div>
        )
      })}

      <div>
        {' '}
        <p>Total: {total()}</p>
      </div>
      <button onClick={handlePayment} type="button">
        Finalizar Compra
      </button>
    </div>
  )
}
