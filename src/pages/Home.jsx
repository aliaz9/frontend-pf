import Hero from '../components/Hero.jsx'
import Style from '../styles/Home.module.css'
import Steps from '../components/Steps.jsx'
import SectionInfo from '../components/SectionInfo.jsx'
import SomeCards from '../components/someCards.jsx'
import Section1 from '../components/section1.jsx'

export default function Home() {
  return (
    <div className={Style.home}>
      <Hero />
      <Steps />
      <SectionInfo />
      <SomeCards />
      <Section1 />
      {/*
      {/*
      <Questions /> */}
    </div>
  )
}
