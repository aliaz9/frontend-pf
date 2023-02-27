import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuth } from '../redux/slices/usersSlice.js'
import '../styles/Nav.css'
export default function Nav () {
  const productsInCart = useSelector((state) => state.users.productsInCart)
  const { name } = useSelector((state) => state.users.auth)

  function numberInCart () {
    let agregados = 0
    for (let i = 0; i < productsInCart.length; i++) {
      agregados = productsInCart[i].cantidad + agregados
    }
    return agregados
  }
  const dispatch = useDispatch()
  function handleLogOut () {
    dispatch(setAuth({}))
  }
  return (
    <div className="nav">
      <div className="nav1">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/products">Productos</Link>
      </div>
      <div className="img">
        <img
          src={
            'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/darkLogo_qnnygr.png'
          }
          height={50}
          alt={'logo'}
        />
      </div>
      <div className="nav2">
        <Link to="/user-page-profile">{name}</Link>
        <Link to="/log-in">
          <button className="button1">Iniciar sesión</button>
        </Link>
        <button type='button' onClick={handleLogOut }  className="button2">Cerrar Sesion</button>
        <Link to="/sign-in">
          <button className="button2">Registrarse</button>
        </Link>
        <div className="cart position-relative">
          <Link to="/shopping-cart">
            <i className="fa-solid fa-cart-shopping" />
  { numberInCart
    ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {numberInCart()}
            </span>
    : null
          }
          </Link>
        </div>
      </div>
    </div>
  )
}
