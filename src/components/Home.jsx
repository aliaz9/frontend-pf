import Hero from './Hero.jsx'
import Style from '../styles/Home.module.css'
import Steps from './Steps.jsx'
import SectionInfo from './SectionInfo.jsx'
import Cards from './Cards.jsx'
import Questions from './Questions.jsx'

export default function Home () {
  return (
    <div>
      <Hero/>
      <Steps />
      <SectionInfo />
      <h3 className={Style.title}>Nuestros productos más populares</h3>
      <Cards />
      <Questions />
    </div>
  )
}
