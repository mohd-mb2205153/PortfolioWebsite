'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import profilePic from '../../public/assets/pic-no-bg.png'
import { motion } from 'framer-motion'
// Need to change the fonts

export default function Hero() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    // Before pt was 50
    <div className='pt-20 pb-2 sm:pt-24 sm:pb-6 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] min-h-screen flex items-center'>
      
      {/* Animated floating particles for mobile */}
      <div className='absolute inset-0 overflow-hidden md:hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#E48A57] rounded-full'
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Planet curve background */}
      <div className='absolute rounded-[50%] w-[2000px] sm:w-[2500px] md:w-[3000px] h-[800px] sm:h-[1000px] md:h-[1300px] bg-black top-[400px] sm:top-[500px] md:top-[650px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>
      </div>
      
      <div className='relative px-4 sm:px-6 md:px-8 w-full'>
        {/* Decorative gradient accents for mobile */}
        <div className='absolute -left-20 top-20 w-40 h-40 bg-[#E48A57]/20 rounded-full blur-3xl md:hidden'></div>
        <div className='absolute -right-20 top-40 w-32 h-32 bg-[#98B4CE]/20 rounded-full blur-3xl md:hidden'></div>
        
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight'>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className='text-[#98B4CE] drop-shadow-[0_0_25px_rgba(152,180,206,0.5)]'>Hi, I am</h1>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05}}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className='text-[#E48A57] drop-shadow-[0_0_30px_rgba(228,138,87,0.6)]'>Muhtasim Bashar</h1>
          </motion.div>

        </div>
    
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[90%] sm:max-w-[500px] mx-auto mt-4 sm:mt-6 md:mt-8 text-white/90 leading-relaxed'
        > 
          I am a Senior CS Student at Qatar University, focusing on AI, Deep Learning, Data Science, Web Development & Mobile Application
        </motion.p>

        {/* Profile picture not loading! */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className='mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6 md:mb-8 relative'
      >
        {/* Glowing ring effect for mobile */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#E48A57] via-[#DBAF6E] to-[#98B4CE] blur-2xl opacity-40 animate-pulse md:hidden'></div>
        <div className='relative'>
          <Image 
            src={profilePic}
            alt='profile picture'
            className='h-auto w-auto mx-auto max-w-[200px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px] drop-shadow-[0_0_40px_rgba(228,138,87,0.4)]'
          />
        </div>
      </motion.div>

              {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto'
        >
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            href='/assets/Muhtasim_CV.pdf'
            download
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#DBAF6E',
              boxShadow: '0 10px 25px rgba(228, 138, 87, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className='rounded-full px-5 py-2.5 sm:px-6 sm:py-3 bg-[#E48A57] text-black font-medium shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl text-sm sm:text-base'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z'/>
            </svg>
            Download CV
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            href='https://github.com/mohd-mb2205153'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(152, 180, 206, 0.15)',
              borderColor: '#DBAF6E',
              color: '#DBAF6E',
              boxShadow: '0 10px 25px rgba(152, 180, 206, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className='rounded-full px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#98B4CE] text-[#98B4CE] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl text-sm sm:text-base backdrop-blur-sm'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
            </svg>
            Visit GitHub
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: '#DBAF6E',
          boxShadow: '0 10px 25px rgba(219, 175, 110, 0.4)'
        }}
        whileTap={{ scale: 0.9 }}
        className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 bg-[#E48A57] text-white rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300'
      >
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/>
        </svg>
      </motion.button>
    </div>
  )
}
