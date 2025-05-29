'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const navLinks = [
  {title: "About", path: "#about"},
  {title: "Skills", path: "#skills"},
  {title: "Projects", path: "#projects"},
  {title: "Experience", path: "#experience"},
  {title: "Contacts", path: "#contatcs"},
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
        <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center content-center p-2 max-w-[500px] mx-auto'>  
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

      </div>
  )
}

/*



        <ul className='flex flex-r justify-around p-1'>
        {navLinks.map( (link, index) => (
          <li key={index} className=''>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ) )}
        </ul>
*/
