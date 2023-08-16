import React from 'react'
import { Card } from 'flowbite-react'



const WhyCard = (props) => {
    return (
        <>
            <Card href="#" className='shadow-4xl'>
                <img src={props.icon} alt="" className='h-11 w-11' />
                <h3 className='text-bluee text-[1.75rem] font-semibold'>{props.mname}</h3>
                <p className='text-justify-none'>{props.para}</p>
            </Card>
        </>
    )
}

export default WhyCard
