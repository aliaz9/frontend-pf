import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'
import { useRoutes } from 'react-router-dom'
import { Products, Users, Form, Orders } from '../admin'
import style from '../styles/LayoutAdmin.module.css'


export default function LayoutAdmin() {
  const routes = useRoutes([
    {
      path: '/products',
      element: <Products />
    },
    { path: '/products/create', element: <Form /> },
    {
      path: '/users',
      element: <Users />
    },
    {  path: '/orders', element: <Orders />  }
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
