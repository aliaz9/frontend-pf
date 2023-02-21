import { Link } from "react-router-dom";
import './nav.css';
import Logo from "../../img/darkLogo.png"


export default function Nav () {
    return (
        <div className= "nav">
            <div className="nav1">
              <a href="/home">Inicio</a>
              <a href="/about">Acerca de</a>
              <Link to="/product" target={true}>Productos</Link>
            </div>
            <div className="img">
                <img src={Logo} height={50} alt={'logo'} />
            </div>
            <div className="nav2">
              <Link to="/log-in">
                <button className="button1">Iniciar sesión</button>
              </Link>
              <Link to="/sign-in">
                <button className="button2">Registrarse</button>
              </Link>
              <div className="cart">
              <a href="/cart"><i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
    

        </div>
    )
}