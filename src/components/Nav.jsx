import { Link } from 'react-router-dom'
import '../styles/Nav.css'

export default function Nav () {
  return (
    <div className='nav'>
      <div className='nav1'>
        <Link to='/'>Inicio</Link>
        <Link to='/about'>Acerca de</Link>
        <Link to='/products'>Productos</Link>
      </div>
      <div className='img'>
        <img src={'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/darkLogo_qnnygr.png'} height={50} alt={'logo'} />
      </div>
      <div className='nav2'>
        <Link to='/log-in'>
          <button className='button1'>Iniciar sesión</button>
        </Link>
        <Link to='/sign-in'>
          <button className='button2'>Registrarse</button>
        </Link>
        <div className='cart'>
          <Link to='/cart'>
            <i className='fa-solid fa-cart-shopping'/>
          </Link>
        </div>
      </div>
    </div>
  )
}