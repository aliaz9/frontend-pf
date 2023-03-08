import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../styles/ProductsTable.module.css'
import { useEffect } from 'react'
import { setPageCurrent } from '../redux/slices/productsSlice'
import { getProducts, deletProduct } from '../redux/slices/thunksAdmin'

const Products = () => {
  const dispatch = useDispatch()

  const { pageCurrent } = useSelector((state) => state.products)
  const { numberOfpages } = useSelector((state) => state.products)
  const { allProducts } = useSelector((state) => state.admin)

  const nextPage = () => {
    // dispatch(setPageCurrent(pageCurrent + 1))
    // dispatch(getProducts())
  }
  const previusPage = () => {
    // dispatch(setPageCurrent(pageCurrent - 1))
    // dispatch(getProducts())
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const handlerDelete = (event) => {
    const id = event.target.id
    dispatch(deletProduct(id)).then((res) => alert(res))
  }

  return (
    <div className={`${style.container}`}>
      <h1>Registro de Productos</h1>
      {/* <div className={style.pagination}>
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
      </div> */}

      <div className={`table-responsive ${style.contTable}`}>
        <table className={`table table-hover ${style.table}`}>
          <thead>
            <tr>
              <th className={` ${style.tHead}`}>ID</th>
              <th className={` ${style.tHead}`}>Nombre</th>
              <th className={` ${style.tHead}`}>Marca</th>
              <th className={` ${style.tHead}`}>Tipo</th>
              <th className={` ${style.tHead}`}>Precio</th>
              <th className={` ${style.tHead}`}>Imagen</th>
              <th className={` ${style.tHead}`}>Documentación</th>
              <th className={` ${style.tHead}`}>Borrar</th>
            </tr>
          </thead>
          {/* <hr /> */}
          <tbody>
            {allProducts.map((element) => {
              return (
                <tr className={style.tBody} key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td>{element.brandName}</td>
                  <td>{element.typeName}</td>
                  <td>{element.unit_price + ' US'}</td>
                  <td>{element.image}</td>
                  <td>{element.document}</td>
                  <td>
                    <button id={element.id} onClick={handlerDelete}></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={style.crear}>
        <h1>Nuevo Producto</h1>
        <Link to="create">
          <button>Crear</button>
        </Link>
      </div>
    </div>
  )
}

export default Products
