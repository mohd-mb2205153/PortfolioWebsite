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

  return (
    <div className='fixed flex justify-center z-50 w-full text-white font-bold'>
      {/* Desktop Navbar */}
      <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center
       content-center px-4 py-4 max-w-[600px] mx-auto bg-black/20 shadow-2xl shadow-black/20'>  
        <ul className='flex flex-row space-x-8'>
          {navLinks.map((link, index) => (
            <li key={index} className='relative group'>
              <Link 
                href={link.path} 
                className='relative px-3 py-2 transform hover:text-[#E48A57] transition-all duration-300 ease-in-out font-medium tracking-wide'
              > 
                {link.title}
                {/* Underline effect */}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E48A57] to-[#DBAF6E] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar Button */}
      <div 
        onClick={toggleNav} 
        className='md:hidden absolute top-6 right-6 border border-white/30 rounded-xl z-[60] text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 p-3 bg-black/20 backdrop-blur-sm'
      >
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
    
      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-xl fixed left-0 top-0 w-full h-full z-[55] transform transition-all duration-500 ease-in-out ${nav ? 'translate-x-0 opacity-100': '-translate-x-full opacity-0'}`}>
        {/* Close button in mobile menu */}
        <div className='absolute top-6 right-6 z-10'>
          <button 
            onClick={toggleNav}
            className='border border-white/30 rounded-xl text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 p-3 bg-black/20 backdrop-blur-sm'
          >
            <AiOutlineClose size={20}/>
          </button>
        </div>

        <ul className='flex flex-col justify-center items-center space-y-10 h-full relative z-10'>
          {navLinks.map((link, index) => (
            <li key={index} className='relative group'>
              <Link 
                href={link.path} 
                onClick={toggleNav} 
                className='text-4xl transform hover:text-[#E48A57] transition-all duration-300 ease-in-out font-medium tracking-wide relative'
              > 
                {link.title}
                {/* Mobile underline effect */}
                <span className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E48A57] to-[#DBAF6E] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu background pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-[#E48A57] rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#98B4CE] rounded-full blur-3xl'></div>
        </div>
      </div>
    </div>
  )
}


