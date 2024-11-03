import React from 'react'
import Navbar from './Components/Navbar'
// import HomeContent from './Components/HomeContent';
import Footer from './Components/Footer'
import AboutContent from './Components/AboutContent';


function Home() {

  return (
    <div className="Home">
        <Navbar />
        <AboutContent />
        <Footer />
    </div>  )
}

export default Home