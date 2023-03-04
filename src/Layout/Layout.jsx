import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Nav from '../components/Nav.jsx'

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
