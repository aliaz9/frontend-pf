import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove, addCart } from '../redux/slices/thunksUsers.js'
import { removeCart } from '../redux/slices/usersSlice.js'
import '../styles/Cart.css'

export default function Cart () {
  const productsInCart = useSelector((state) => state.users.productsInCart)
  console.log(productsInCart)
  const dispatch = useDispatch()

  function handleAddCart (product) {
    dispatch(addCart(product))
  }

  function removeOne (product) {
    dispatch(remove(product))
  }

  function total () {
    let total = 0
    for (let i = 0; i < productsInCart.length; i++) {
      const subtotal = productsInCart[i].price * productsInCart[i].cantidad
      total = total + subtotal
    }
    return total
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
              <p className="title"> {p.cantidad} </p>
              <button className="btn btn-info" onClick={() => handleAddCart(p)}>
                +
              </button>
              <button className="btn btn-info" onClick={() => removeOne(p)}>
                -
              </button>
            </div>
            <div className="col-4">{<p>{p.price * p.cantidad}</p>}</div>
          </div>
        )
      })}

      <div>
        {' '}
        <p>Total: {total()}</p>
      </div>

      <Link to="/checkout">
        <button type="button">Finalizar Compra</button>
      </Link>
    </div>
  )
}
