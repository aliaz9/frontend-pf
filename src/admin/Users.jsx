
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Users.module.css'
import { users } from "../redux/slices/thunksAdmin";

export default function Users() {

const allUsers = useSelector((state) => state.admin.allUsers);
let dispatch = useDispatch()


useEffect(() => {
dispatch(users())
}, [])

    return (
        <div>
        <h1 className={styles.title}>Usuarios</h1>

     <div className={`${styles.container} container`}>

            <div className={`${styles.row} row`}>
                <div className="col-3">
                    Nombre
                </div>
                <div className="col-3">
                    Email
                </div>
                <div className="col-2">
                    Ordenes
                </div>
                <div className="col-2">
                    Eliminar
                </div>

                {allUsers && allUsers.map(u => {

                    return (

                        <div className={`${styles.row} row`}>
                            <div className="col-3">
                                {u.name}
                            </div>
                            <div className="col-3">
                                {u.email}
                            </div>
                            <div className="col-2">
                            <button className={`${styles.blue} btn btn-primary`}> Ver Ordenes </button>
                            </div>
                            <div className="col-2">
                            <button className={`${styles.red} btn btn-danger`}> Borrar </button>
                            </div>
                        </div>
                    )
                })}

            </div>
            </div>
        </div>
    )
}

