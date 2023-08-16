import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import CurveHome from '../Components/CurveHome'

const About = () => {
  return (
    <div className='mt-24 '>
      <MyNavbar/>
      <CurveHome flink="Home" slink="About" bgImg="bg-aboutBg" />
    </div>
  )
}

export default About 
