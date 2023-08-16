import React from 'react'

import Aboutimg from '../Images/aboutimg.png'

const About = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-20 mx-10 md:mt-20 mt-10'>
                <div className='font-cario md:p-4 p-0 md:order-1 order-2 '>
                    <div className='text-bluee mb-3'>
                        <p><strong>About Butwal Multiple Campus</strong></p>
                    </div>
                    <div className='text-4xl font-semibold mb-3'>
                        <h1>Education is the <br /> Most Powerfull Weapon</h1>
                    </div>
                    <div className='mb-3 text-justify' >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ad tempora quae ullam
                            molestias suscipit, aliquid beatae ab quasi perspiciatis est earum, laborum nam repudiandae
                            sint eveniet eius culpa, placeat officia reiciendis ipsa neque! Deserunt, officia ut?
                            Tempora impedit, molestiae commodi aut, deleniti itaque dolorum rem similique perspiciatis
                            voluptates ipsam at voluptas!</p>
                    </div>
                    <button className='bg-bluee rounded-md  text-white text-lg px-3 py-2'>Read More</button>
                </div>
                <div className='flex justify-center items-center md:order-2 order-1'>
                    <img src={Aboutimg} alt="About Image" className='rounded-xl w-full h-5/6'/>
                </div>
                
            </div>
        </>
    )
}

export default About
