import Style from '../styles/Hero.module.css'
import { Link } from 'react-router-dom'

export default function Hero () {
  return (
    <div>
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
          <img
            src={
              'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/imgHero_drn6fx.jpg'
            }
            alt="img-panelSolar"
            className={Style.imgHeroCSS}
          />
          <img
            src={
              'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/iconLogo_yibb6t.png'
            }
            alt="decoracion"
            className={Style.LogoDecoCSS}
          />
        </div>
      </div>
    </div>
  )
}
