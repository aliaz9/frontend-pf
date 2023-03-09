import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { orders } from '../redux/slices/thunksAdmin.js'
// import { getOrderDetail } from '../redux/slices/thunksAdmin'
// import { getOrderDetail } from "../redux/slices/thunksAdmin";
import styles from '../styles/OrderDetail.module.css'

export default function OrderDetail() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(orders())
  }, [])
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()
  const allOrders = useSelector((state) => state.admin.allOrders)
  const filter = allOrders.filter((el) => el.bought[0].UserUid === id)

  // function total() {
  //   filter[0].bought.reduce((acc, curr) => {
  //     total = acc + curr.unit_price
  //   }, 0)
  //   return total
  // }

  return (
    <div className={styles.order}>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        BACK
      </button>

      <div className={styles.datos}>
        <div className={styles.datosComprador}>
          <h1>Order: {filter[0]?.bought[0]?.id}</h1>
          <h4>Datos del Cliente</h4>
          <h6>{filter[0].name}</h6>
          {/* <h6>{order.mail}</h6> */}
        </div>

        <div className={styles.pago}>
          <h4>PayPal</h4>
          <p>Pago Aprobado</p>
          {/* <p>Identificador de la transacción: {order.paymentId}</p> */}
        </div>
      </div>

      <div className={styles.productos}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-3">Producto</div>
            <div className="col-3">Cantidad</div>
            <div className="col-3">Precio</div>
            <div className="col-3">Total</div>
          </div>
        </div>

        {filter[0].bought.map((p, i) => {
          return (
            <div key={i} className={styles.container}>
              <div className="row">
                <div className="col-3">{p.title}</div>
                <div className="col-3">{p.quantity}</div>
                <div className="col-3">{p.unit_price}</div>
                <div className="col-3">{p.quantity * p.unit_price}</div>
              </div>
            </div>
          )
        })}

        <div className="total">
          {/* <h4 className={styles.total}>Total: ${total()}</h4> */}
        </div>
      </div>
    </div>
  )
}
