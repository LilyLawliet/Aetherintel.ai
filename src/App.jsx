import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import SectionTwo from './components/SectionTwo.jsx'
import SectionThree from './components/SectionThree.jsx'
import SectionFour from './components/SectionFour.jsx'
import SectionFive from './components/SectionFive.jsx'
import SectionSix from './components/SectionSix.jsx'

function App() {
  return (
    <>
     <Navbar />
     <HeroSection />
     <SectionTwo />
     <SectionThree />
     <SectionFour />
     <SectionFive />
     <SectionSix />
    </>
  )
}

export default App
