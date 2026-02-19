import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/layout/HeroSection'
import ValueSection from '../components/layout/ValueSection'
import AboutUsSection from '../components/layout/AboutUsSection'
import OtherProductSec from '../components/layout/OtherProductSec'
import Footer from '../components/layout/Footer'


function HomePages() {
  
  return (
    <>
    <div className='relative'>
    <Navbar/>
    
      <HeroSection/>
      <ValueSection/>
      <AboutUsSection/>
      <OtherProductSec/>
      <Footer/>
     </div>
    
    </>
  )
}

export default HomePages