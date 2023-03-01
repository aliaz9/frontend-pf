import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/Sidebar.jsx'

export default function LayoutAdmin () {
  return (
    <div>
      <Sidebar />
      <Outlet/>
    </div>
  )
}
