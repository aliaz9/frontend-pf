import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'
import { useRoutes, Routes, Route } from 'react-router-dom'
import { Products, Users } from '../admin'
import style from '../styles/LayoutAdmin.module.css'
import OrderDetail from '../admin/OrderDetail.jsx'

export default function LayoutAdmin() {
  const routes = useRoutes([
    { path: '/products', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/orders/:id', element: <OrderDetail /> }
  ])
  return (
    <div className={style.container}>
      <div>
        <Sidebar />
      </div>
      <div>{routes}</div>
    </div>
  )
}
