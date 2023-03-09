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
      const subtotal = productsInCart[i].unit_price * productsInCart[i].quantity
      total = total + subtotal
    }
    return total
  }

  function handlePayment() {
    dispatch(loaderPayment())
  }

  return (
    <div className="containerSUP">
    <div className="containerAll">


      {productsInCart.map((p) => {
        return (
          <div className="container"> 
              <div className="containerProduct">   
              <p className="title1">{p.title} </p>
                <img src={p.image} className="cart-image img1" alt="imagen-carrito" />

                <p className="titleprice">${p.unit_price}</p>
              </div>      

              <div className="row" key={p.id}>

                <div className="containerFunciones">
                      <p>Quitar del carrito</p>
                      <button
                        className="buttonRed"
                        onClick={() => dispatch(removeCart(p.id))}
                      >
                        X
                      </button>


                    <p className="title"> Cantidad: {p.quantity} </p>
                    <p className="pp">${p.unit_price * p.quantity}</p>


                      <div className="buttonContainer">
                        <button className="button12" onClick={() => handleAddCart(p)}>
                        +
                        </button>
                        <button className="button12" onClick={() => removeOne(p)}>
                        -
                        </button>
                      </div>

                      <div>
                        {' '}
                        <p className="pp">Total: ${total()}</p>
                      </div>

                    </div>


              </div>

            </div>                  
              
          
        )
      })}



    </div>
    <div className="buttonContainer">
              <button  className="button15" onClick={handlePayment} type="button">
                Finalizar Compra
              </button>
          </div>
    </div>

  )
}
