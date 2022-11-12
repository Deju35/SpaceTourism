import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainingComp from '../components/TrainingComp'
const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="TRAINING." text='Pre-Flight & In-Flight Training.' />
        <TrainingComp />
        <Footer />
    </div>
  )
}

export default Training