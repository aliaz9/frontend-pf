
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/slices/usersSlice";
import styles from '../styles/Users.module.css'


export default function Users() {

const allUsers = useSelector((state) => state.users);
let dispatch = useDispatch()

useEffect(() => {
dispatch(getUsers())
console.log(allUsers.users)
}, [allUsers])

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
        <div>
        <h1 className={styles.title}>Usuarios</h1>

     <div class={`${styles.container} container`}>

            <div className={`${styles.row} row`}>
                <div class="col-3">
                    Nombre
                </div>
                <div class="col-3">
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
                            <div class="col-3">
                                {u.name}
                            </div>
                            <div class="col-3">
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
        </div>
    )
}

