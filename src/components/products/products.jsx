import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductInfo } from '../../actions'
import Style from './products.module.css'
import Cards from '../cards/cards'
import SectionInfo from '../sectionInfo/sectionInfo'
import Search from '../seach/Search.jsx'

export default function Products() {
  let productInfo = useSelector((state) => state.productInfo)
  let dispatch = useDispatch()
  const params = useParams()
  // console.log( props.match.params.id)
  // console.log(id)
  const { id } = params
  useEffect(() => {
    dispatch(getProductInfo(id))
    // console.log('En los detalles')
  }, [dispatch, id])

  return (
    <div>
      <div className={Style.containerSectionInfo}>
        <div className={Style.izquierda}>
          <img
            src='https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img-panelSolar'
            className={Style.SectionInfoImg}
          />
        </div>
        <div className={Style.derecha}>
          <div className={Style.containerText}>
            <h1>¿Estás listo para el cambio?</h1>
            <h4>
              Generá electricidad bajo costo y amigable con el medio ambiente
            </h4>
            <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>
            <button>
              Comprar ahora <i class='fa-solid fa-arrow-down'></i>
            </button>
          </div>
        </div>
      </div>
      {/*Search  */}
      <Search />
      <h1 className={Style.titulo}>Nuestros Productos</h1>

      <div className='Cards-component'>
        <Cards></Cards>
      </div>
    </div>
  )
}
