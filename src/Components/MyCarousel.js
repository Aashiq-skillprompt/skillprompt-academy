import React from 'react'

import { Carousel, Card } from 'flowbite-react'
import First from '../Images/homecard/1st.svg'
import Second from '../Images/homecard/2nd.svg'
import Third from '../Images/homecard/3rd.svg'

const MyCarousel = () => {
    const cardHome = [
        {
            img: First,
            number: '500+',
            faculty: 'Student'
        },
        {
            img: Second,
            number: '100+',
            faculty: 'Teachers'
        },
        {
            img: Third,
            number: '20+',
            faculty: 'Awards'
        },
        {
            img: Third,
            number: '100+',
            faculty: 'Classroom'
        }
    ]

    return (
        <>
            <div className="h-[37rem] w-full">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-tubg2 bg-cover bg-no-repeat bg-center ">
                        <div className='text-white absolute sm:left-20 left-10 font-cario'>
                            <p className='text-lg mb-5'>WELCOME TO COLLEGE</p>
                            <h1 className='md:text-5xl text-4xl font-medium mb-4'>We are determined to <br /> achieve the highest standards</h1>
                            <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, deleniti!</p>
                            <button className='bg-white rounded-md  text-bluee text-lg px-3 py-2'>Read More</button>
                        </div>

                    </div>
                    <div className="flex h-full items-center justify-center bg-tubg3 bg-cover bg-no-repeat bg-center">
                        <div className='text-white absolute sm:left-20 left-10 font-cario'>
                            <p className='text-lg mb-5'>WELCOME TO COLLEGE</p>
                            <h1 className='md:text-5xl text-4xl font-medium mb-4'>We are determined to <br /> achieve the highest standards</h1>
                            <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, deleniti!</p>
                            <button className='bg-white rounded-md  text-bluee text-lg px-3 py-2'>Read More</button>
                        </div>
                    </div>
                </Carousel>
                <div className='md:flex hidden justify-center relative top-[-60px]'>
                    <Card href="#" className='w-4/5 shadow-4xl '>
                        <div className='grid md:grid-cols-4'>
                            {
                                cardHome.map((nato, key) => {
                                    return (
                                        <div key={key} className='flex items-center'>
                                            <img src={nato.img} alt="" className='h-[50px]' />
                                            <div className='pl-3'>
                                                <h4 className='text-2xl font-bold'>{nato.number}</h4>
                                                <p className='text-lg font-normal'>{nato.faculty}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default MyCarousel
