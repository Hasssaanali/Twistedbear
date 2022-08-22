import React, { Fragment } from 'react'
import Header from '../Components/Header'
import Mainbanner from '../Components/Mainbanner'
import Story from '../Components/Story'
import Rarity from '../Components/Rarity'
import Roadmap from '../Components/Roadmap'
import Slider from '../Components/Slider'
import Accordion from '../Components/Accordion'
import Discordlink from '../Components/Discordlink'
import Footer from '../Components/Footer'
import { accordion } from '../Data/Data'


export default function Home() {
    return (
   <Fragment>
     <Header />
      <Mainbanner />
      <Story />
      <Rarity />
      <Roadmap />
      <Slider />
      
      <Accordion passingdata={accordion}/>
      <Discordlink />
      <Footer />
   </Fragment>
  )
}
