import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrderDetail } from "../redux/slices/thunksAdmin";
import styles from '../styles/OrderDetail.module.css'


export default function OrderDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect((id) => {
        dispatch(getOrderDetail(id));
    }, [dispatch, id])

    let order = useSelector((state) => state.admin.orderDetail);

    function total() {
        let total = 0
        for (let i = 0; i < order.products.length; i++) {
            const subtotal = order.products[i].unit_price * order.products[i].quantity
            total = total + subtotal
        }
        return total
    }

    return (

        <div className={styles.order}>

            <Link to="/admin/orders" >
                <button className="btn btn-primary">BACK</button>
            </Link>

            <div className={styles.datos}>

                <div className={styles.datosComprador}>
                    <h1>Order: {order.id}</h1>
                    <h4>Datos del Cliente</h4>
                    <h6>{order.name}</h6>
                    <h6>{order.mail}</h6>
                </div>

                <div className={styles.pago}>
                    <h4>PayPal</h4>
                    <p>Pago Aprobado</p>
                    <p>Identificador de la transacción: {order.paymentId}</p>
                </div>
            </div>

            <div className={styles.productos}>

                <div className={styles.container}>
                    <div className="row">
                        <div className="col-3">
                            Producto
                        </div>
                        <div className="col-3">
                            Cantidad
                        </div>
                        <div className="col-3">
                            Precio
                        </div>
                        <div className="col-3">
                            Total
                        </div>
                    </div>
                </div>

                {
                    order.products?.map((p, i) => {
                        return (
                            <div key={i} className={styles.container}>
                                <div className="row">
                                    <div className="col-3">
                                        {p.title}
                                    </div>
                                    <div className="col-3">
                                        {p.quantity}
                                    </div>
                                    <div className="col-3">
                                        {p.unit_price}
                                    </div>
                                    <div className="col-3">
                                        {p.quantity * p.unit_price}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="total">
                    {/* <h4 className={styles.total}>Total: ${total}</h4> */}
                </div>

            </div>

        </div>

    )

}