"use client"
import React from 'react'
import Image from "next/image"

import Logo from "@/assets/logo.png"
import ButtonNav from "@/assets/button-nav.png"
import DownArrow from "@/assets/down-arrow.png"

const Navbar = () => {
  return (
    <div className='px-6 md:px-8 py-4 text-white'>
        <div className='container mx-auto flex justify-between items-center '>
            <div>
                <Image src={Logo} alt='Logo Image.....' className='h-8 w-20 md:h-10 md:w-44'/>
            </div>
            <div className='hidden text-white md:flex items-center uppercase'>
                <li className='mr-3 cursor-pointer'>About Us</li>
                <div className="dropdown dropdown-hover mr-3">
                    <div tabIndex={0} role="button" className="flex items-center"><p>Our Services</p><Image className="h-3 w-3 ml-3 mb-1" src={DownArrow} alt='Down Arrow'/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Crypto Sales</a></li>
                        <li><a>Crypto Trade</a></li>
                    </ul>
                </div>
                <li className='mr-3 cursor-pointer'>Work with Us</li>
                <li className='mr-3 cursor-pointer'>Blog</li>
            </div>
            <div className='flex items-center cursor-pointer'>
                <Image src={ButtonNav} alt='button-nav' className='mr-2'/>
                <p className='uppercase text-xs'>Get In Touch</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar