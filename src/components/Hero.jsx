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
              'https://res.cloudinary.com/daieynebb/image/upload/v1677472341/Images/solar_panel_fvixdj.png'
            }
            alt="img-panelSolar"
            className={Style.imgPanel}
          />
          <img
            src={
              'https://res.cloudinary.com/daieynebb/image/upload/v1677495953/Images/forma_hri3ay.png'
            }
            alt="img-panelSolar"
            className={Style.imgHeroCSS}
          />


                  {/* <img
            src={
              'https://res.cloudinary.com/daieynebb/image/upload/v1677474266/Images/hombre_cln9re.png'
            }
            alt="img-panelSolar"
            className={Style.imgHeroHombre}
            /> */}
          {/* <img
            src={
              'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/iconLogo_yibb6t.png'
            }
            alt="decoracion"
            className={Style.LogoDecoCSS}
          /> */}
        </div>
      </div>
      <div>
      <img
            src={
              'https://res.cloudinary.com/daieynebb/image/upload/v1677244010/wave_1_syhna5.svg'
            }
            alt="decoracion"
            className={Style.separador}
          /> 

      </div>
    </div>
  )
}
