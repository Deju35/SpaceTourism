import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
import Footer from '../components/Footer'
export const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text='Contact SPCE ODY'/>
        <Form />
        <Footer />
        
    </div>
  )
}
export default Contact