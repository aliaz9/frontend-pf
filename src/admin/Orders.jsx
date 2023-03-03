
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Orders.module.css'
import { orders, users } from "../redux/slices/thunksAdmin";

export default function Orders() {

const allOrders = useSelector((state) => state.admin.allOrders);
let dispatch = useDispatch()

 useEffect(() => {
    dispatch(orders())
 }, [])

    return (
        <div>
        <h1 className={styles.title}>Ordenes</h1>

     <div className={`${styles.container} container`}>

            <div className={`${styles.row} row`}>
                <div className="col-2">
                    Numero
                </div>
                <div className="col-2">
                    Fecha
                </div>
                <div className="col-3">
                    Comprador
                </div>
                <div className="col-2">
                    Total
                </div>
                <div className="col-3">
                    Detalle
                </div>


                {allOrders && allOrders.map(u => {

                    return (

                        <div key={u.id} className={`${styles.row} row`}>
                            <div className="col-2">
                                {u.id}
                            </div>
                            <div className="col-2">
                                {u.date}
                            </div>
                            
                            <div className="col-3">
                                {u.name}
                            </div>

                            <div className="col-2">
                                {u.total}
                            </div>

                            <div className="col-3">
                            <button className={`${styles.blue} btn btn-primary`}> Ver Detalle </button>
                            </div>
                            
                        </div>
                    )
                })}

            </div>
            </div>
        </div>
    )
}

