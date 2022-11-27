import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
