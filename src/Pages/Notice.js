import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import CurveHome from '../Components/CurveHome'

const Notice = () => {
  return (
    <div className='mt-24 '>
      <MyNavbar/>
      <CurveHome flink="Home" slink="Notice" bgImg="bg-noticeBg" />
    </div>
  )
}

export default Notice
