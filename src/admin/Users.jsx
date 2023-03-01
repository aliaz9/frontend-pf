import React from "react";
import styles from '../styles/Users.module.css'


export default function Users() {

    const users = [{
        id: 1,
        name: "Alina Alvarez",
        email: "alina@hasjd.com",
        ordenes: [1, 5]
    },
    {
        id: 2,
        name: "Jose Alvarez",
        email: "jose@hasjd.com",
        ordenes: [2, 6]
    },
    {
        id: 3,
        name: "Pedro Alvarez",
        email: "pedro@hasjd.com",
        ordenes: [3, 4]
    }
    ]

    return (
        <div class="container">

            <div className={`${styles.row} row`}>
                <div class="col-4">
                    Nombre
                </div>
                <div class="col-4">
                    Email
                </div>
                <div class="col-2">
                    Ordenes
                </div>
                <div class="col-2">
                    Eliminar
                </div>

                {users.map(u => {

                    return (

                        <div class={`${styles.row} row`}>
                            <div class="col-4">
                                {u.name}
                            </div>
                            <div class="col-4">
                                {u.email}
                            </div>
                            <div class="col-2">
                            <button className={`${styles.blue} btn btn-primary`}> Ver Ordenes </button>
                            </div>
                            <div class="col-2">
                            <button className={`${styles.red} btn btn-danger`}> Borrar </button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}