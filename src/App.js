import React from 'react'
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Vision from './Components/Vision';
import Contact from './Components/Contact';
import aboutimage from './images/frame19.svg';
import aboutimage1 from './images/download.svg';
import aboutimage3 from './images/presentation.svg';
import EventRegistration from './Components/EventRegistration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Presentation image={aboutimage3}/>
      <EventRegistration image={aboutimage} title='Coming Soon!' button='Register' / >
      <About   image={aboutimage1} title='Happening Now!' button='Join now' / >
      <Vision />
      <Contact/>
    </div>
  );
}

export default App;
