import React from 'react'
import { Card } from 'flowbite-react'

import newscard1 from '../Images/newscard/newscard1.png'
import newscard2 from '../Images/newscard/newscard2.png'
import newscard3 from '../Images/newscard/newscard3.png'

import videopic from '../Images/videopic.png'

const LatestNews = () => {
    const newsCardImg = [
        {
            img: newscard1,
            topic: "Student were on trip patan, Industrial Area",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            img: newscard2,
            topic: "Student were on trip patan, Industrial Area",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            img: newscard3,
            topic: "Student were on trip patan, Industrial Area",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
    ]
    return (
        <div className='md:mx-20 mx-10 mt-10 font-cario'>
            <div>
                <h1 className='text-bluee text-[2.5rem] font-semibold'>Latest News</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ab.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-7'>
                {
                    newsCardImg.map((nato, key) => {
                        return (
                            <Card key={key} imgSrc={nato.img} className='shadow-4xl'>
                                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {nato.topic}
                                </h4>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {nato.desc}
                                </p>
                                <a href="#" className='text-blue-600 font-semibold text-base'>Read More</a>
                            </Card>
                        )
                    })
                }
            </div>
            <div className='mt-12'>
                <img src={videopic} alt="Video" />
            </div>
        </div>
    )
}

export default LatestNews
