import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import CurveHome from '../Components/CurveHome'

const Gallery = () => {
  return (
    <div className='mt-24 '>
      <MyNavbar/>
      <CurveHome flink="Home" slink="Gallery" bgImg="bg-galleryBg" />
    </div>
  )
}

export default Gallery
