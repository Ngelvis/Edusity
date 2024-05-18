import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Video from './components/video/Video';
import { useState } from'react';
// import Raw from './components/raw/Raw';


function App() {

  const  [playState, setPlayState] = useState(false);


  return (

  <div>

    <Navbar/>

    <Hero/>

    <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Students Say'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      {/* <Raw/> */}
    </div>
    <Video playState={playState} setPlayState={setPlayState}/>

  </div>
)
}

export default App;