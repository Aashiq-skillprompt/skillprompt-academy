import React, { useState } from 'react'
// import { Navbar, Button } from 'flowbite-react'
import tulogo from '../Images/Tribhuvan_University_Logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import MyButton from './MyButton'

const MyNavbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className=' shadow-3xl fixed top-0 z-50 w-full bg-white'>
                <div className='flex flex-wrap justify-between items-center mx-auto'>
                    <div className='p-2 pl-7'>
                        <Link to='/' className='flex items-center'>
                            <img src={tulogo} alt="tribhuvan university" className='sm:h-20 sm:w-20  h-16 w-16' />
                            <span className='lg:text-3xl sm:text-2xl text-xl font-cario pl-2 font-semibold text-bluee dark:text-white whitespace-nowrap'>Tribhuvan University</span>
                        </Link>
                    </div>
                    {
                        toggle ? <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-xl lg:hidden absolute right-3'/> :
                        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-xl lg:hidden absolute right-3' />
                    }
                    <div className='flex mr-4'>
                        <ul className='font-medium lg:flex items-center font-cario gap-x-8 text-lg hidden'>
                            <li>
                                <Link to="/" className='hover:text-bluee' >Home</Link>
                            </li>
                            <li>
                            <Link to="/about" className='hover:text-bluee'>About</Link>
                            </li>
                            <li>
                            <Link to="#" className='hover:text-bluee'>Program</Link>
                            </li>
                            <li>
                            <Link to="/facilities" className='hover:text-bluee'>Facilities</Link>
                            </li>
                            <li>
                            <Link to="/notice" className='hover:text-bluee'>Notice</Link>
                            </li>
                            <li>
                            <Link to="/gallery" className='hover:text-bluee'>Gallery</Link>
                            </li>
                            <li>
                            <Link to="/contactus" className='hover:text-bluee'>Contact Us</Link>
                            </li>
                            <li><Link to="/admission"><MyButton /></Link></li>
                        </ul>

                    </div>
                    {/* responsive menu */}
                    <ul className={`lg:hidden text-lg fixed top-[80px] sm:top-[96px] bg-gray-200 w-full h-screen
                            ${toggle ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                        <li className='p-3'>
                            <Link to="/" >Home</Link>
                        </li>
                        <li className='p-3 '>
                        <Link  to="/about" >About</Link>
                        </li>
                        <li className='p-3'>
                        <Link to="#" >Program</Link>
                        </li>
                        <li className='p-3'>
                        <Link to="/facilities" >Facilities</Link>
                        </li>
                        <li className='p-3'>
                        <Link to="#" >Notice</Link>
                        </li>
                        <li className='p-3'>
                        <Link to="/gallery" >Gallery</Link>
                        </li>
                        <li className='p-3'>
                        <Link to="/contactus" >Contact Us</Link>
                        </li>
                        <li className='p-3'><Link to='/admission'><MyButton /></Link></li>
                    </ul>
                </div>
            </nav>













            {/* <Navbar
                fluid={true}
                rounded={true}
                className='bg-red-500 shadow-3xl'
            >
                <Navbar.Brand
                    to="/navbars"
                >
                    <img
                        src={tulogo}
                        className="mr-3 h-[5rem] ps-5"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-cario font-semibold dark:text-white text-bluee">
                        Tribhuvan University
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle className='lg:hidden block'/>
                <Navbar.Collapse className='pr-8 font-cario'>
                    <Navbar.Link
                        href="/navbars"
                        className='text-lg'
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        to="/navbars"
                        className='text-lg'
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Program
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Facilities
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Notice
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Gallery
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Contact Us
                    </Navbar.Link>
                    <MyButton />
                </Navbar.Collapse>
            </Navbar> */}


            {/* <Navbar
                fluid={true}
                rounded={true}
                className='bg-red-500 shadow-3xl'
            >
                <Navbar.Brand href="#">
                    <img
                        src={tulogo}
                        className="mr-3 h-[5rem] ps-5"
                        alt="TU Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-cario font-semibold dark:text-white text-bluee">
                        Tribhuvan University
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        Admission
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='font-cario'>
                    <Navbar.Link
                        href="/navbars"
                        className='text-lg'
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Program
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Facilities
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Notice
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Gallery
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className='text-lg'>
                        Contact Us
                    </Navbar.Link>
                    <MyButton />
                </Navbar.Collapse>
            </Navbar> */}
        </>
    )
}

export default MyNavbar

