import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import CurveHome from '../Components/CurveHome'

const ContactUs = () => {
  return (
    <div className='mt-24 '>
      <MyNavbar/>
      <CurveHome flink="Home" slink="Contact Us" bgImg="bg-contactBg"/>
    </div>
  )
}

export default ContactUs
