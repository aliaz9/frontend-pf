import styles from '../styles/About.module.css'
import { Link } from 'react-router-dom'

export default function About (){
  return(
    <>
    <div className={styles.container} id="top">

    <div className={styles.containerH1}>
              <div className={styles.containerText}>
                <h1 className={styles.h1}>¿Estás listo para el cambio?</h1>
                <h4>Puedes ahorrar dinero invirtiendo en energía solar.</h4>

                <Link to="/products">
                  <button class={styles.button1}>
                    Comprar ahora <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>

                <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>

                </div>
            </div>

        </div>


          <h3 className={styles.titleInfo}>
            ¿Qué beneficios tiene la energía solar?
          </h3>

        <div className={styles.Info}>
                <div className={styles.boxInfo}>
                  <i class="fa-solid fa-solar-panel"></i>
                  <h3>CONTRA EL CAMBIO CLIMÁTICO</h3>
                  <p>
                    La energía solar no emite gases de efecto invernadero, por lo que no
                    contribuye al calentamiento global. De hecho, se muestra como una de
                    las tecnologías renovables más eficientes en la lucha contra el
                    cambio climático.
                  </p>
               </div>

              <div className={styles.boxInfoIMGcontainer}>
                <img className={styles.boxInfoIMG} src="https://res.cloudinary.com/daieynebb/image/upload/v1678139914/FlatIcon/la-temperatura_ab3q3h.png">
                </img>
              </div>

              <div className={styles.boxInfoIMGcontainer}>
                <img className={styles.boxInfoIMG} src="https://res.cloudinary.com/daieynebb/image/upload/v1678141204/FlatIcon/energia_kxvpqi.png">
                </img>
              </div>


              <div className={styles.boxInfo}>
                  <i class="fa-solid fa-solar-panel"></i>
                  <h3>ES INAGOTABLE Y SE RENUEVA</h3>
                  <p>
                    Al contrario que las fuentes tradicionales de energía como el
                    carbón, el gas, el petróleo o la energía nuclear, cuyas reservas son
                    finitas, la energía del sol está disponible en todo el mundo y se
                    adapta a los ciclos naturales (por eso las denominamos renovables).
                    Por ello son un elemento esencial de un sistema energético
                    sostenible que permita el desarrollo presente sin poner en riesgo el
                    de las futuras generaciones.
                  </p>
              </div>        



              <div className={styles.boxInfo}>
                  <i class="fa-solid fa-solar-panel"></i>
                  <h3>NO CONTAMINANTE</h3>
                  <p>
                    De todas estas ventajas, es importante destacar que la energía solar
                    no emite sustancias tóxicas ni contaminantes del aire, que pueden
                    ser muy perjudiciales para el medio ambiente y el ser humano. Las
                    sustancias tóxicas pueden acidificar los ecosistemas terrestres y
                    acuáticos, y corroer edificios. Los contaminantes de aire pueden
                    desencadenar enfermedades del corazón, cáncer y enfermedades
                    respiratorias como el asma. La energía solar no genera residuos ni
                    contaminación del agua, un factor muy importante teniendo en cuenta
                    la escasez de agua.
                  </p>
              </div>


            
                <div className={styles.boxInfoIMGcontainer}>
                  <img className={styles.boxInfoIMG} src="https://res.cloudinary.com/daieynebb/image/upload/v1678141342/FlatIcon/sin-botellas-de-plastico_olx6yj.png">
                  </img>
                </div>

                <div className={styles.boxInfoIMGcontainer}>
                  <img className={styles.boxInfoIMG} src="https://res.cloudinary.com/daieynebb/image/upload/v1678141502/FlatIcon/energia-solar_zdjmmh.png">
                  </img>
                </div>


              <div className={styles.boxInfo}>
                <i class="fa-solid fa-solar-panel"></i>
                <h3>CRECIENTEMENTE COMPETITIVAS</h3>
                <p>
                  Hoy las renovables, son más baratas que las energías convencionales en buena parte del
                  mundo. Están reduciendo drásticamente sus costes, de forma que ya son plenamente
                  competitivas con las convencionales. Las economías de escala y la innovación están ya
                  consiguiendo que las energías renovables lleguen a ser la solución
                  más sostenible, no sólo ambiental sino también económicamente, para
                  mover el mundo.
                </p>
              </div>          

             <div className={styles.boxButton}>
              

              <a href="#top">
                <button className={styles.button1} href="#top">
                  Ir hacia arriba <i class="fa-solid fa-arrow-up"></i>
                </button>
              </a> 

            </div>
            
          </div>
  </>

)}