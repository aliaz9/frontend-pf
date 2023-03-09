import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuth } from '../redux/slices/usersSlice.js'
import '../styles/Nav.css'
export default function Nav() {
  const productsInCart = useSelector((state) => state.users.productsInCart)
  function numberInCart() {
    let agregados = 0
    for (let i = 0; i < productsInCart.length; i++) {
      agregados = productsInCart[i].quantity + agregados
    }
    return agregados
  }
  const dispatch = useDispatch()
  function handleLogOut() {
    dispatch(setAuth({}))
    localStorage.removeItem('token')
  }
  const auth = useSelector((state) => state.users.auth)

  return (
    
    <div className="nav">

        <input type="checkbox" id="nav-check"></input>

        <div className="img">
            <img
              src={
                'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/darkLogo_qnnygr.png'
              }
              height={50}
              alt={'logo'}
            />
        </div>

     {/* burgen menu, por ahora sin animation */}

      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>


      <div class="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/products">Productos</Link>



        <Link to="/user-page-profile">{auth?.name}</Link>
          {!auth?.name && (
            <Link to="/log-in">
              <button className="button1">Iniciar sesión</button>
            </Link>
          )}
          {auth?.name && (
            <button type="button" onClick={handleLogOut} className="button2">
              Cerrar Sesion
            </button>
          )}
          <Link to="/sign-in">
            <button className="button2">Registrarse</button>
          </Link>

        
      </div>

      <div className="cart position-relative">
            <Link to="/shopping-cart">
              <i className="fa-solid fa-cart-shopping" />
              {numberInCart ? (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {numberInCart()}
                </span>
              ) : null}
            </Link>
        
      </div>


    </div>
  )
}
