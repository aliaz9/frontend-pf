import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'
import { useRoutes } from 'react-router-dom'
import { Products, Users, Form } from '../admin'
import style from '../styles/LayoutAdmin.module.css'
import OrderDetail from '../admin/OrderDetail.jsx'
import Orders from '../admin/Orders.jsx'

export default function LayoutAdmin() {
  const routes = useRoutes([
    { path: '/products', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/orders/:id', element: <OrderDetail /> },
    { path: '/orders', element: <Orders /> }
  ])
  
  return (
    <div className={style.container}>
      <div className={style.division}>
        <Sidebar />
        <Outlet />
      </div>
      <div className={style.division}>{routes}</div>
    </div>
  )
}
