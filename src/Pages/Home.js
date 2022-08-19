import React, { Fragment } from 'react'
import Header from '../Components/Header'
import Mainbanner from '../Components/Mainbanner'
import Story from '../Components/Story'
import Roadmap from '../Components/Roadmap'
import Slider from '../Components/Slider'
import Accordion from '../Components/Accordion'
import Discordlink from '../Components/Discordlink'
import Footer from '../Components/Footer'


export default function Home() {
    return (
   <Fragment>
     <Header />
      <Mainbanner />
      <Story />
      <Roadmap />
      <Slider />
      <Accordion />
      <Discordlink />
      <Footer />
   </Fragment>
  )
}
