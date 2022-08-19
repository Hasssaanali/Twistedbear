import logo from './logo.svg';
import "./style.css"
import "./slick.css"
import React, { Fragment, useState } from 'react';
import Accordion from './Components/Accordion';
import Slider from './Components/Slider';
import Roadmap from './Components/Roadmap';
import Mainbanner from './Components/Mainbanner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Discordlink from './Components/Discordlink';
import Story from './Components/Story';
import Loader from './Components/Loader';
import Home from './Pages/Home';


function App() {
  
  return (
    <Fragment>

    <Loader/>
     <Home/>
    </Fragment>
  );
}

export default App;
