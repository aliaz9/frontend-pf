import React from "react";
import Style from "./hero.module.css";
import LogoDeco from '../../img/iconLogo.png'
import imgHero from '../../img/imgHero.jpg'


export default function Hero() {
    return(
    <div>
        <div className={Style.container}>

            <div className={Style.izquierda}>
                <h1>Fabricantes de Paneles Solares</h1>
                <h4>Ayudemos a crear un mundo próspero con energía limpia y sostenible</h4>
                <button>Saber más sobre Energía Limpia</button>
            </div>

            <div className={Style.derecha}>
                <img src={imgHero} alt="img-panelSolar" className={Style.imgHeroCSS}/>
                <img src={LogoDeco} alt="decoracion" className={Style.LogoDecoCSS}/>
            </div>
            
        </div>



            

    </div>
    )
}