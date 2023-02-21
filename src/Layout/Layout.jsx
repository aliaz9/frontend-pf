import Nav from '../components/nav/nav.jsx';
import Footer from '../components/footer/footer.jsx';


export default function Layout({children})  {
  
  return (
    <div>
      <Nav/>
      {children}
      <Footer/>
      
    </div>
  )
}
