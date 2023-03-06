import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
