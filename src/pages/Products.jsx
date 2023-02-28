import styles from '../styles/Products.module.css'
import Cards from '../components/Cards.jsx'
// import FilterAndOrder from '../components/FilterAndOrder.jsx'
import Pagination from '../components/Pagination.jsx'
import Search from '../components/Search.jsx'

export default function Products() {
  return (
    <div>
      <div className={styles.containerSectionInfo}>
        <div className={styles.izquierda}>
          <img
            src="https://res.cloudinary.com/daieynebb/image/upload/v1677472341/Images/solar_panel_fvixdj.png"
            alt="img-panelSolar"
            className={styles.SectionInfoImg}
          />
        </div>
        <div className={styles.derecha}>
          <div className={styles.containerText}>
            <h1>¿Estás listo para el cambio?</h1>
            <h4>
              Generá electricidad bajo costo y amigable con el medio ambiente
            </h4>
            <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>
            <button type="button">
              Comprar ahora <i className="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>
      </div>
      {/* Search  */}
      <Search />
      {/* <FilterAndOrder/> */}
      <h1 className={styles.titulo}>Nuestros Productos</h1>

      <div className="Cards-component">
        <Cards />
        <Pagination />
      </div>
    </div>
  )
}
