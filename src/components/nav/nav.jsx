import { Link } from "react-router-dom";
import './nav.css';


export default function Nav () {
    return (
        <div className= "nav">
            <div className="nav1">
            <Link to="/home">
                <button>Inicio</button>
            </Link>
            <Link to="/about">
                <button>Acerca de</button>
            </Link>
            <Link to="/products">
                <button>Productos</button>
            </Link>
            </div>
            <div className="nav2">
            <Link to="/log In">
                <button>Iniciar sesión</button>
            </Link>
            <Link to="/sign in">
                <button>Registrarse</button>
            </Link>
            </div>
            <div className="nav3">
            <Link to="/cart">
                <img src="https://tse2.mm.bing.net/th?id=OIP.ZTkFCCP4CmG0YtHR9umHdAHaHa&pid=Api&P=0" width={30} height={30} />
            </Link>
            </div>

        </div>
    )
}

