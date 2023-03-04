import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderDetail } from "../redux/slices/thunksAdmin";
import styles from '../styles/OrderDetail.module.css'

// import { getOrderById } 

export default function OrderDetail() {

    const order = {
        id: 66,
        name: "Alina Alvarez",
        mail: "alina@gmail.com",
        paymentId: "273947403038464933",
        paymentStatus: "Pago Aprobado",
        products: [{
            idProduct: "1",
            title: "Panel 1",
            unit_price: 2000,
            quantity: 1
        }, {
            idProduct: "2",
            title: "Batería",
            unit_price: 3000,
            quantity: 1
        }
        ]
    }

    let dispatch = useDispatch();

    useEffect(() => {
      // dispatch(getOrderDetail(props.match.params.id))
      dispatch(getOrderDetail());
      console.log("orderDetail", orderDetail);
  
    }, [])

    let orderDetail = useSelector((state) => state.admin.orderDetail);



    return (

        <div className={styles.order}>

            <Link to="/admin/orders" >
                <button className="btn btn-primary">BACK</button>
            </Link>

            <div className={styles.datosComprador}>
                <h1>Order: {order.id}</h1>
                <h4>Datos del Cliente</h4>
                <h6>{order.name}</h6>
                <h6>{order.mail}</h6>
            </div>

            <div className={styles.pago}>
                <h4>Mercado Pago</h4>
                <p>{order.paymentStatus}</p>
                <p>Identificador de la transacción: {order.paymentId}</p>
            </div>

            <div class={styles.container}>
                <div class="row">
                    <div class="col-3">
                        Producto
                    </div>
                    <div class="col-3">
                        Cantidad
                    </div>
                    <div class="col-3">
                        Precio
                    </div>
                    <div class="col-3">
                        Total
                    </div>
                </div>
            </div>

            {
                order && order.products.map(p => {
                    return (
                        <div class={styles.container}>
                            <div class="row">
                                <div class="col-3">
                                    {p.title}
                                </div>
                                <div class="col-3">
                                    {p.quantity}
                                </div>
                                <div class="col-3">
                                    {p.unit_price}
                                </div>
                                <div class="col-3">
                                    {p.quantity * p.unit_price}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="total">
                <h4>Total: $700</h4>
            </div>


        </div>

    )

}