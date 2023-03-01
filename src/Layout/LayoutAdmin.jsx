import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Users } from '../admin/'

export default function LayoutAdmin() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
