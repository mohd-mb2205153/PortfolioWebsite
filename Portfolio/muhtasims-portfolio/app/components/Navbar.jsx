'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai' 

const navLinks = [
  {title: "About", path: "#about"},
  {title: "Experience", path: "#experience"},
  {title: "Skills", path: "#skills"},
  {title: "Projects", path: "#projects"},
  {title: "Contacts", path: "#contacts"},
] 

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav(!nav)
  }

  function closeNav() {
    setNav(false)
  }
  //backdrop blur
  return (
      <div className='fixed flex justify-center z-50 w-full text-white font-bold'>
        {/* Desktop Navbar */}
        <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center
         content-center p-2 max-w-[500px] mx-auto'>  
        <ul className='flex flex-row p-2 space-x-8'>
        {navLinks.map( (link, index) => (
          <li key={index} className=''>
            <Link href={link.path} className='transform hover:text-white/50 transition-all duration-300 ease-in-out'> 
              {link.title}
            </Link>
          </li>
        ) )}
        </ul>
        </div>
        {/* Mobile Navbar */}

        {/* Button */}
        <div onClick={toggleNav} className='md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2'>
          { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
      
        <div className={`md:hidden bg-black/90 fixed left-0 top-0 w-full h-full transform transition-transform duration-300 ${nav ? 'translate-x-0': '-translate-x-full'}`}>
          <ul className='flex flex-col justify-center items-center space-y-8 h-full'>
            {navLinks.map( (link, index) => (
              <li key={index} className=''>
                {/* Not using closeNav() */}
                <Link href={link.path} onClick={toggleNav} className='text-4xl transform hover:text-white/50 transition-all duration-300 ease-in-out '> 
                  {link.title}
                </Link>
              </li>
            ) )}
          </ul>
        </div>

      </div>
  )
}


