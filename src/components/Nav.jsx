import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
export default function Nav () {
  const productsInCart = useSelector((state) => state.users.productsInCart)
  const numberInCart = productsInCart.length
  const { name } = useSelector(state => state.users.auth)
  const { loading } = useSelector(state => state.users)
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
        {name}
        {!loading && name
          ? <Link to="/profile">{name}</Link>
          : <Link to="/log-in">
           <button className="button1">Iniciar sesión</button>
        </Link> }
        <Link to="/sign-in">
          <button className="button2">Registrarse</button>
        </Link>
        <div className="cart">
          <Link to="/shopping-cart">
            <i className="fa-solid fa-cart-shopping" />
  { numberInCart
    ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {numberInCart}
            </span>
    : null
          }
          </Link>
        </div>
      </div>
    </div>
  )
}
