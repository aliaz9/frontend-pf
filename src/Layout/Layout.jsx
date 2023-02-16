import Nav from '../components/nav/nav.jsx';


export default function Layout({children})  {
  
  return (
    <div>
      <Nav/>
      {children}
      {/*  Aqui podria ir el footer para que se renderize en todas las rutas */}
    </div>
  )
}
