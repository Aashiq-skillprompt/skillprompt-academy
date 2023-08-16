import React from 'react'

import Tulogo from '../Images/Tribhuvan_University_Logo.png'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {MdLocationOn} from 'react-icons/md'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    const d=new Date();
    const year = d.getFullYear();
    return (
        <>
            <div className=' mt-9 font-cario grid grid-cols-1'>
                <div className='bg-blueedark text-white lg:flex lg:flex-row lg:pb-0 pb-5'>
                    <div className='lg:basis-1/2 font-medium md:text-3xl text-2xl p-5 lg:pl-20 lg:text-left text-center'>
                        <h2>Get information updates about<br />Tribhuvan university through your email</h2>
                    </div>
                    <div className='lg:basis-1/2 flex justify-center items-center'>
                        {/* bbbbbbbbbbbbbbbbb */}

                        <form className='w-10/12'>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Subscribe</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-[0.325rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                            </div>
                        </form>

                        {/* bbbbbbbbbbbbbbbbb */}
                    </div>
                </div>
                <div className='bg-bluee text-white md:grid md:grid-cols-6 grid grid-cols-1 p-4'>
                    <div className='md:col-span-3 md:px-16 px-0'>
                        <div className='ml-3 flex items-center'>
                            <img src={Tulogo} alt="" className='sm:h-20 sm:w-20  h-16 w-16' />
                            <span className='lg:text-2xl text-xl font-cario pl-2 font-semibold text-white dark:text-white whitespace-nowrap'>Tribhuvan University</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                consectetur voluptate
                                placeat incidunt tenetur explicabo aperiam exercitationem minima vitae vero.</p>
                        </div>
                    </div>
                    <div >
                        <h5 className='text-xl font-semibold'>Quick Links</h5>
                        <ul className='text-lg font-medium leading-10 mt-3'>
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">About Us</a>
                            </li>
                            <li>
                                <a href="#!">Programs</a>
                            </li>
                            <li>
                                <a href="#!">Facilities</a>
                            </li>
                            <li>
                                <a href="#!">News and Notice</a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h5 className='text-xl font-semibold'>Facilities</h5>
                        <ul className='text-lg font-medium leading-10 mt-3'>
                            <li>
                                <a href="#!">Fine Arts Studio</a>
                            </li>
                            <li>
                                <a href="#!">Library</a>
                            </li>
                            <li>
                                <a href="#!">Sports</a>
                            </li>
                            <li>
                                <a href="#!">Computer Labs</a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h5 className='text-xl font-semibold'>Information</h5>
                        <ul className=' leading-10 mt-3'>
                            <li className='flex items-center'>
                                <BsFillTelephoneFill className='text-xl'/>
                                <p className="d-inline ps-2">01-4331076</p>
                            </li>
                            <li className='flex items-center'>
                                <SiGmail className='text-xl' />
                                <p className="d-inline ps-2">tuiost@gmail.com</p>
                            </li>
                            <li className='flex items-center'>
                                <MdLocationOn className='text-xl'/>
                                <p className="d-inline ps-2">kathmandu, Nepal</p>
                            </li>
                        </ul>
                        <div className='flex text-2xl mt-3 gap-4'>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaLinkedinIn /></a>
                            <a href=""><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className='bg-blueedark text-white text-center p-3'>
                    <span> College Website - &copy; {year} All rights reserved </span>
                </div>
            </div>
        </>
    )
}

export default Footer
