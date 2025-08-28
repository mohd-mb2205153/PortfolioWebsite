'use client'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/assets/pic-no-bg.png'
import { motion } from 'framer-motion'
// Need to change the fonts

export default function Hero() {
  return (
    // Before pt was 50
    <div className='pt-50 py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      
      <div className='absolute rounded-[50%] w-[3000px]  h-[1300px] bg-black top-[650px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>
      </div>
      
      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
          <motion.div
              initial={{ x:-500 }}
              animate={{ x:0 }}
              transition={{type:'spring', stiffness:40,}}
          >
            <h1 className='text-[#98B4CE]'>Hi, I am</h1>
          </motion.div>

          <motion.div
              initial={{ x:500 }}
              animate={{ x:0 }}
              whileHover={{ scale: 1.05}}
              transition={{type:'spring', stiffness:40}}
          >
            <h1 className='text-[#E48A57]'>Muhtasim Bashar</h1>
          </motion.div>

        </div>
    
        <p className='text-xl text-center max-w-[500px] mx-auto mt-8 text-white/80'> 
          I am a Senior CS Student at Qatar University, focusinng AI, Deep Learning, Data Science, Web Development & Mobile Application
        </p>

        {/* Profile picture not loading! */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ stiffness:40 }}
      >
        <Image 
          src={profilePic}
          alt='profile picture'
          className='h-auto w-auto mx-auto'
        />
      </motion.div>

      {/* Action buttons */}
      <div className='mt-8 flex justify-center gap-4'>
        <a
          href='/assets/Muhtasim_CV.pdf'
          download
          className='rounded-full px-6 py-3 bg-[#E48A57] text-black font-medium shadow-sm hover:bg-[#E48A57]/90 transition-colors'
        >
          Download CV
        </a>
        <a
          href='https://github.com/mohd-mb2205153'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full px-6 py-3 border border-[#98B4CE] text-[#98B4CE] font-medium hover:bg-[#98B4CE]/10 transition-colors'
        >
          Visit GitHub
        </a>
      </div>

      </div>

    </div>


    
  )
}
