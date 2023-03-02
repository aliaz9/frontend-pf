import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../styles/ProductsTable.module.css'

const Products = () => {
  const { products } = useSelector((state) => state.products)

  const handlerMod = (event) => {}

  return (
    <div className={`${style.container}`}>
      <div className={`table-responsive ${style.contTable}`}>
        <table className={`table table-striped ${style.table}`}>
          <thead>
            <tr>
              <th className={` ${style.tHead}`}>ID</th>
              <th className={` ${style.tHead}`}>Nombre</th>
              <th className={` ${style.tHead}`}>Marca</th>
              <th className={` ${style.tHead}`}>Tipo</th>
              <th className={` ${style.tHead}`}>Precio</th>
              <th className={` ${style.tHead}`}>Imagen</th>
              <th className={` ${style.tHead}`}>Documentación</th>
              <th className={` ${style.tHead}`}>Modificar</th>
            </tr>
          </thead>
          {/* <hr /> */}
          <tbody>
            {products.map((element) => {
              return (
                <tr className={style.tBody} key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.brandName}</td>
                  <td>{element.typeName}</td>
                  <td>{element.price + ' US'}</td>
                  <td>{element.image}</td>
                  <td>{element.document}</td>
                  {/* <button onClick={handlerMod}></button> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={style.crear}>
        <h1>Crear</h1>
        <Link to="create">
          <button>Crear</button>
        </Link>
      </div>
    </div>
  )
}

export default Products
