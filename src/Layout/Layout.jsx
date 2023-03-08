import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer.jsx'
import Nav from '../components/Nav.jsx'
import Style from '../styles/Layout.module.css'

export default function Layout() {
  return (
    <div className={Style.layoutBody}>
      <Nav />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}
