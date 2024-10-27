import React from 'react'
import Image from 'next/image'

import Logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <div className='bg-black px-8 py-12'>
       <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div>
                <p className='text-lg font-bold mb-5'>Gravity Team</p>
                <p>About Us</p>
                <p>Work with Us</p>
            </div>
            <div className='mt-6 md:mt-0'>
                <Image src={Logo} alt='Logo'/>
            </div>
       </div>
       <div className='container mx-auto flex flex-col md:flex-row items-center justify-between pt-10'>
            <p className='text-sm sm:text-base'>Terms of Use & Privacy Policy</p>
            <p className='text-sm sm:text-base'>©2024 Gravity Team. All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer