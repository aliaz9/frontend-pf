import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../styles/ProductsTable.module.css'
import { setPageCurrent } from '../redux/slices/productsSlice'
import { getProducts } from '../redux/slices/thunksProducts'

const Products = () => {
  const dispatch = useDispatch()

  const { pageCurrent } = useSelector((state) => state.products)
  const { numberOfpages } = useSelector((state) => state.products)
  const { products } = useSelector((state) => state.products)

  const nextPage = () => {
    dispatch(setPageCurrent(pageCurrent + 1))
    dispatch(getProducts())
  }
  const previusPage = () => {
    dispatch(setPageCurrent(pageCurrent - 1))
    dispatch(getProducts())
  }

  const handlerMod = (event) => {}

  return (
    <div className={`${style.container}`}>
      <h1>Registro de Productos</h1>
      <div className={style.pagination}>
        <div>
          <button
            className={style.prev}
            onClick={() => nextPage()}
            disabled={pageCurrent === numberOfpages}
          ></button>
        </div>
        <div>
          <button
            className={style.next}
            onClick={() => previusPage()}
            disabled={pageCurrent === 1}
          ></button>
        </div>
      </div>

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
                  <td>
                    <button onClick={handlerMod}></button>
                  </td>
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
