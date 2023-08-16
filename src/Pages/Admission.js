import React from 'react'
import MyNavbar from '../Components/MyNavbar'
// import AdmissionCo from '../Components/AdmissionCo'
// import NewAdmissionCo from '../Components/NewAdmissionCo'
import CurveHome from '../Components/CurveHome'
import RealAdmission from '../Components/RealAdmission'
import Footer from '../Components/Footer'
const Admission = () => {
  return (
    <div className='mt-24 '>
      <MyNavbar/>
      {/* <AdmissionCo/> */}
      {/* <NewAdmissionCo /> */}
      <CurveHome flink="Home" slink="Admission" bgImg="bg-admissionBg" />
      <RealAdmission />
      <Footer />
    </div>
  )
}

export default Admission
