import Hero from '../components/Hero.jsx'
import Style from '../styles/Home.module.css'
import Steps from '../components/Steps.jsx'
import SectionInfo from '../components/SectionInfo.jsx'
import Cards from '../components/Cards.jsx'
import Questions from '../components/Questions.jsx'
import SomeCards from '../components/someCards.jsx'

export default function Home () {
  return (
    <div>
      <Hero/>
      <Steps />
      <SectionInfo />
      <h3 className={Style.title}>Algunos De Nuestros Productos</h3>
      <SomeCards />
      <Questions />
    </div>
  )
}
