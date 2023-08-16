import React from 'react'
import { Carousel } from 'flowbite-react'

const Testimonials = () => {
    const testimonialDetails = [
        {
            mname: 'Michael Gough',
            post: 'CEO at Google',
            quote: "In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made"
        },
        {
            mname: 'John Smith ',
            post: 'CEO at Meta',
            quote: "My experience at Tribhuvan University is great and memorable. The mentors at Tribhuvan University helped us enhance my academic and interper"
        },
        {
            mname: 'Aashiq Chalise',
            post: 'CEO at Apple',
            quote: "Tribhuvan University and SET faculties have put in all the efforts to groom ."
        }
    ]
    return (
        <div className='md:mx-20 mx-10 mt-10 font-cario'>
            <div>
                <h1 className='text-bluee text-[2.5rem] font-semibold'>Testimonials</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ab.</p>
            </div>
            <div className="h-80  mt-5 ">
                <Carousel
                    leftControl=" "
                    rightControl=" "
                >
                    {
                        testimonialDetails.map((nato, key) => {
                            return (
                                <figure key={key} className="max-w-screen-md mx-auto text-center">
                                    <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-blue-500 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                    <blockquote>
                                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">{nato.quote}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{nato.mname}</cite>
                                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{nato.post}</cite>
                                        </div>
                                    </figcaption>
                                </figure>
                            )
                        })
                    }
                </Carousel>
            </div>


            {/* <Carousel
                    leftControl="<"
                    rightControl=">"
                >
                    <div className='grid md:grid-cols-12 gap-2'>
                        <div className=' bg-red-300'>
                            <img src={Comma1} alt="Comma" />
                        </div>
                        <div className='md:col-span-10 bg-red-300'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel aperiam
                                exercitationem
                                eligendi mollitia eaque corporis voluptatem quas libero et modi dignissimos eius
                                odio sunt
                                error, autem aliquam facere vitae repudiandae voluptas eum adipisci veniam similique
                                hic. Quos
                                optio error esse impedit accusamus itaque laudantium commodi! Consequuntur ipsum
                                modi non rem
                                quo libero. Ab nesciunt sunt, ratione nisi aliquam vitae delectus assumenda facere
                                repellendus
                                optio voluptatum, unde quia veritatis et. Est, debitis? Quod blanditiis, aliquam id
                                in natus
                                fugiat eius!</p>
                        </div>
                        <div className=' bg-red-300'>
                            <div className='md:absolute md:bottom-0 '><img src={Comma2} alt="Comma" /></div>
                        </div>
                    </div>
                </Carousel> */}
        </div>
    )
}

export default Testimonials
