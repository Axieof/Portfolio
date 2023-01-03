import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experiences from './components/Experiences';

function App() {

  return (
    <div className="App bg-slate-200">
      <Intro />
      <Portfolio />
      {/*<Education />*/}
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
