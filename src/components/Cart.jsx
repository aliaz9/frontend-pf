import { replace } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addCart, loaderPayment, remove } from '../redux/slices/thunksUsers.js'
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

  function handleAddCart(product) {
    dispatch(addCart(product))
  }

  function removeOne(product) {
    dispatch(remove(product))
  }
  useEffect(() => {
    if (link) {
      window.open(link)
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
    const productsModify = productsInCart.map((el) => {
      const cosito = {
        title: el.title,
        unit_price: el.price,
        quantity: el.quantity
      }
      return cosito
    })
    dispatch(loaderPayment(productsModify))
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
