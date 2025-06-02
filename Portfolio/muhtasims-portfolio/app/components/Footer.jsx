import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className='mt-12 mb-12 text-white/70 container mx-auto border-t border-gray-700 
        pt-4 flex justify-between items-center max-w-[1000px]'>
          <h1 className='text-2xl font-bold'> Muhtaism Bashar </h1>

          <div className='flex space-x-6 mt-4'>
            <a href="www.linkedin.com/in/muhtasim-bashar" className='hover:text-gray-300'>
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/rafid2k2/" className='hover:text-gray-300'>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <p className='text-center text-xl text-gray-300 text-[10px]'> Copyright &copy; 2024. All rights reserved. Made with ☕ and ❤️</p>
    </>

  )
}
