import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import MyCarousel from '../Components/MyCarousel'
import About from '../Components/About'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonials from '../Components/Testimonials'
import LatestNews from '../Components/LatestNews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Home
