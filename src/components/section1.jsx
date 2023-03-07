import Style from '../styles/section1.module.css'
// import { Link } from 'react-router-dom'

export default function Section1 () {
  return (
    <div className={Style.container}>
      <div className={Style.izquierda}>
         <h1>¿Qué ventajas tiene la Energía Solar?</h1>
         <h5>Los paneles solares son una buena alternativa si quieres consumir energía propia, limpia y ahorrar dinero a largo plazo:</h5>
        <ul>
          <li><i class="fa-solid fa-leaf"></i>Cero emisiones contaminantes</li>
          <li><i class="fa-solid fa-leaf"></i>Ahorro energético</li>
          <li><i class="fa-solid fa-leaf"></i>No genera ruido</li>
        </ul>

      </div>

      <div className={Style.derecha}>
         <img className={Style.image} src="https://res.cloudinary.com/daieynebb/image/upload/v1678044606/Fondos/section1_zbmi5i.png" alt="" />
      </div>
    </div>
  )
}
