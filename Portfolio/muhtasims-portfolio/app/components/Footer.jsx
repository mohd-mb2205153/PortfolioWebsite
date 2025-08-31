import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black border-t border-gray-800/30 py-12'>
      <div className='max-w-4xl mx-auto px-6'>
        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-8'>
          {/* Brand */}
          <div className='text-center md:text-left'>
            <h2 className='text-2xl font-bold text-white mb-2'>
              Muhtasim <span className='text-[#E48A57]'>Bashar</span>
            </h2>
            <p className='text-white/60 text-sm'>
              Building innovative solutions for tomorrow
            </p>
          </div>

          {/* Social Links */}
          <div className='flex space-x-4'>
            <a 
              href="https://www.linkedin.com/in/muhtasim-bashar" 
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/mohd-mb2205153" 
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.instagram.com/rafid2k2/" 
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800/30 mb-6'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
          <p className='text-white/50 text-sm'>
            © {currentYear} Muhtasim Bashar. All rights reserved.
          </p>
          <p className='text-white/50 text-sm flex items-center gap-2'>
            Made with <span className='text-red-400'>❤️</span> and <span className='text-amber-600'>☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
