import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'
import { useRoutes } from 'react-router-dom'
import { Products, Users } from '../admin'
import style from '../styles/LayoutAdmin.module.css'
import Orders from '../admin/Orders.jsx'

export default function LayoutAdmin() {
  const routes = useRoutes([
    { path: '/products', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> }
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
