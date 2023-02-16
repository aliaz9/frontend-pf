import { Link } from "react-router-dom";
import './nav.css';
import Logo from "../Img/darkLogo.png";


export default function Nav () {
    return (
        <div className= "nav">
            <div className="nav1">
              <a href="#home">Inicio</a>
              <a href="#home">Acerca de</a>
              <a href="#home">Productos</a>
            </div>
            <div className="img">
                <img src={Logo} height={50} />
            </div>
            <div className="nav2">
              <Link to="/log In">
                <button className="button1">Iniciar sesión</button>
              </Link>
              <Link to="/sign in">
                <button className="button2">Registrarse</button>
              </Link>
              <div className="cart">
              <a href="#home"><i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
            

        </div>
    )
}