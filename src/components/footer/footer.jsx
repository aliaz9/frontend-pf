import React from "react";
import Style from "./footer.module.css";
import Logo from '../../img/lightLogo.png'

export default function Footer() {
    return(
        <div className={Style.mainFooter}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={`${Style.col} ${Style.col1}`}>
                        <img src={Logo} alt="logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto veritatis temporibus libero esse laborum.</p>
                    <div className={Style.icons}>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    </div>

                    <div className={`${Style.col} ${Style.col2}`}>
                        <h4>Enlaces Rápidos</h4>

                        <a href="/">Inicio</a>
                        <a href="/">Acerca de</a>
                        <a href="/">Productos</a>
                        <a href="/">Contacto</a>

                    </div>
                    <div className={`${Style.col} ${Style.col3}`}>
                        <h4>Otros</h4>
                            <a href="/">Preguntas Frecuentes</a>
                            <a href="/">Energía Limpia</a>
                            <a href="/">Soporte Técnico</a>
                    </div>
                    <div className={`${Style.col} ${Style.col4}`}>
                        <h4>Contactanos</h4>                    
                            <a href="mailto:info@ecosun.com"><i class="fa-sharp fa-solid fa-envelope"></i>  info@ecosun.com</a>
                            <a href=""><i class="fa-solid fa-phone"></i>    +54 9 11 457 985 451</a>
                            <a href="/"><i class="fa-solid fa-headphones"></i>  Soporte Técnico</a>                  
                            <a href=""><i class="fa-solid fa-location-dot"></i> 772 Av. Libertad. Buenos Aires</a>
                    </div>

                </div>
                <div className={Style.foot}>
                    <p>© 2023 Grupo 1. Proyecto Final - Henry. Derechos Reservados</p>
                    <p>Términos y Condiciones | Política de Privacidad | Disclaimer</p>

                </div>
            </div>
        </div>
    )
}

