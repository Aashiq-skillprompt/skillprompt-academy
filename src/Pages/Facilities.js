import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import CurveHome from '../Components/CurveHome'

const Facilities = () => {
    return (
        <div className='mt-24'>
            <MyNavbar />
            <CurveHome flink="Home" slink="Facilities" bgImg="bg-facilitiesBg" />
        </div>
    )
}

export default Facilities
