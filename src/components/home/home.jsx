import React from "react";
import Hero from "../hero/hero";
import Cards from "../cards/cards";
import Steps from "../steps/steps";
import Questions from "../questions/questions";
import SectionInfo from "../sectionInfo/sectionInfo";

export default function Home() {
    return (
     <div>
     <Hero />
     <Cards />
     <Steps />
     <SectionInfo />
     <Questions />
     </div>
    )
}