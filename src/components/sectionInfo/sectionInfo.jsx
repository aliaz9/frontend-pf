import React from "react";
import Style from "./sectionInfo.module.css";
import SectionImg from '../../img/sectionInfoImg.jpg';

export default function SectionInfo() {
    return(

    <div>
        <div className={Style.container}>

            <div className={Style.izquierda}>
                <img src={SectionImg} alt="img-panelSolar" className={Style.SectionInfoImg}/>                              
                
            </div>

            <div className={Style.derecha}>
                <div className={Style.containerText}>
                    <h1>¿Estás listo para el cambio?</h1>
                    <h4>Generá electricidad bajo costo y amigable con el medio ambiente</h4>
                    <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>
                    <button>Comprar ahora <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>           
            
        </div>

        
    </div>
    )}