import Style from '../styles/Hero.module.css'
import { Link } from 'react-router-dom'


export default function Hero () {
  return (

      <div className={Style.container}>

        <div className={Style.izquierda}>
            <h1>Fabricantes de Paneles Solares</h1>
            <h4>
              Ayudemos a crear un mundo próspero con energía limpia y sostenible
            </h4>

            <Link to="/about">
              <button className="button1">Saber más sobre Energía Limpia</button>
            </Link>
        </div>

        <div className={Style.derecha}>
          
          {/* <img
              src={
                'https://res.cloudinary.com/daieynebb/image/upload/v1677623063/Fondos/hero1_ls6dvu.png'
              }
              alt="img-panelSolar"
              className={Style.hola}
          /> */}

        </div>

      </div>
  )
}
