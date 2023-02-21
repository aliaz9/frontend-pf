import React from "react";
import Hero from "../hero/hero";
import Cards from "../cards/cards";
import Steps from "../steps/steps";
import Questions from "../questions/questions";
import SectionInfo from "../sectionInfo/sectionInfo";
import Style from "./home.module.css";

export default function Home() {
    return (
     <div>
        <Hero />
        <Steps />
        <SectionInfo />
        <h3 className={Style.title}>Nuestros productos más populares</h3>
        <Cards />
        <Questions />
     </div>
    )
}