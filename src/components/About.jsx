import styles from '../styles/About.module.css'
import { Link } from 'react-router-dom'

export default function About () {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.derecha}>
          <div className={styles.containerText}>
            <h1>¿Estás listo para el cambio?</h1>
            <h4>Puedes ahorrar dinero invirtiendo en energía solar.</h4>
            <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>
            <Link to="/product">
              <button>
                Comprar ahora <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.izquierda}>
          <img
            src="https://images.pexels.com/photos/1495580/pexels-photo-1495580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img-panelSolar"
            className={styles.SectionInfoImg}
          />
        </div>
      </div>
      <h3 className={styles.titleInfo}>
        ¿Qué beneficios tiene la energía solar?
      </h3>
      <div className={styles.Info}>
        <div className={styles.boxInfo}>
          <h3>CONTRA EL CAMBIO CLIMÁTICO</h3>
          <p>
            La energía solar no emite gases de efecto invernadero, por lo que no
            contribuye al calentamiento global. De hecho, se muestra como una de
            las tecnologías renovables más eficientes en la lucha contra el
            cambio climático.{' '}
          </p>
        </div>

        <div className={styles.boxInfo}>
          <h3>ES INAGOTABLE Y SE RENUEVA</h3>
          <p>
            Al contrario que las fuentes tradicionales de energía como el
            carbón, el gas, el petróleo o la energía nuclear, cuyas reservas son
            finitas, la energía del sol está disponible en todo el mundo y se
            adapta a los ciclos naturales (por eso las denominamos renovables).
            Por ello son un elemento esencial de un sistema energético
            sostenible que permita el desarrollo presente sin poner en riesgo el
            de las futuras generaciones.{' '}
          </p>
        </div>

        <div className={styles.boxInfo}>
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

        <div className={styles.boxInfo}>
          <h3>CRECIENTEMENTE COMPETITIVAS</h3>
          <p>
            Hoy las renovables, concretamente la eólica y la fotovoltaica, son
            más baratas que las energías convencionales en buena parte del
            mundo. Las principales tecnologías renovables están reduciendo
            drásticamente sus costes, de forma que ya son plenamente
            competitivas con las convencionales en un número creciente de
            emplazamientos. Las economías de escala y la innovación están ya
            consiguiendo que las energías renovables lleguen a ser la solución
            más sostenible, no sólo ambiental sino también económicamente, para
            mover el mundo.
          </p>
        </div>
      </div>
    </div>
  )
}
