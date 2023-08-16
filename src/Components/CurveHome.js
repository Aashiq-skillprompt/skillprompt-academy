import React from 'react'
import { Link } from 'react-router-dom'

const CurveHome = (props) => {
    return (
        <div>
            <div className={`${props.bgImg} h-[463px] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col`}>
                <div className='mb-4'>
                    <h1 className='text-white text-4xl font-cario font-medium'>{props.slink}</h1>
                </div>
                <div className='text-xl text-white font-cario flex space-x-4'>
                    <Link to="/"  >{props.flink}</Link>
                    <div>&nbsp;|&nbsp;</div>
                    <Link to="/admission" >{props.slink}</Link>
                </div>

            </div>
        </div>
    )
}

export default CurveHome
