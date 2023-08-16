import React from 'react'
import WhyCard from './WhyCard'

import Engage from '../Images/chooseus-image/engage.svg'
import Clean from '../Images/chooseus-image/clean.svg'
import Graudation from '../Images/chooseus-image/graduation.svg'
import Empower from '../Images/chooseus-image/empower.svg'
import Star from '../Images/chooseus-image/star.svg'

const WhyChooseUs = () => {
    const card = [
        {
            icon: Empower,
            mname: "Empower",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
        {
            icon: Engage,
            mname: "Engage",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
        {
            icon: Clean,
            mname: "Clean",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
        {
            icon: Graudation,
            mname: "Graudation",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
        {
            icon: Star,
            mname: "Awarding",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
        {
            icon: Star,
            mname: "Favourite",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia harum aliquid. Saepe, delectus modi."
        },
    ]
    return (
        <div className='md:mx-20 mx-10 mt-5'>
            <div className=' font-cario'>
                <div className='text-center'>
                    <h1 className='text-[2.5rem] text-blackk font-semibold'>Why Choose Us</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, porro.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-7">
                {
                    card.map((nato, key) => {
                        return (
                            <WhyCard key={key} icon={nato.icon} mname={nato.mname} para={nato.para} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WhyChooseUs
