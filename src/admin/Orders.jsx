import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Orders.module.css'
import { orders } from '../redux/slices/thunksAdmin'
import { Link } from 'react-router-dom'

export default function Orders() {
  const allOrders = useSelector((state) => state.admin.allOrders)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(orders())
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Ordenes</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col-2">Numero</th>
            <th scope="col-2">Fecha</th>
            <th scope="col-3">Comprador</th>
            <th scope="col-2">Total</th>
            <th scope="col-3">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {allOrders &&
            allOrders.map((o) => {
              const total = o.bought.reduce((acc, curr) => {
                return acc + curr.unit_price
              }, 0)
              return (
                <tr>
                  <th className={`col-2`}>{o.bought[0]?.id}</th>
                  <th className={`col-2`}>2023</th>
                  <th className={`col-3`}>{o.name}</th>
                  <th className={`col-2`}>{total}</th>

                  <th className="col-3">
                    <Link to={`/admin/orders/${o.bought[0].UserUid}`}>
                      <button className={`${styles.blue} btn btn-primary`}>
                        {' '}
                        Ver Detalle{' '}
                      </button>
                    </Link>
                  </th>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
