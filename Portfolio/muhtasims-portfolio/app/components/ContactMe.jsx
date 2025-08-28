'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactMe() {
  return (
    <div className='bg-black py-24 px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-6xl font-bold text-center mb-16'
        >
          Contact <span className='text-[#E48A57]'>Me</span>
        </motion.h1>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Section - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 240 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-8'
          >
            {/* Phone */}
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#E48A57] to-[#DBAF6E] rounded-2xl shadow-lg flex items-center justify-center transform  hover:rotate-0 transition-transform duration-300'>
                  <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
                  </svg>
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-[#E48A57] to-[#DBAF6E] rounded-2xl blur opacity-20'></div>
              </div>
              <div>
                <p className='text-white text-lg font-medium'>+974 77776954</p>
                <p className='text-gray-400 text-sm'>Phone</p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#E48A57] to-[#8F5C55] rounded-2xl shadow-lg flex items-center justify-center transform hover:rotate-0 transition-transform duration-300'>
                  <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
                  </svg>
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-[#E48A57] to-[#8F5C55] rounded-2xl blur opacity-20'></div>
              </div>
              <div>
                <p className='text-white text-lg font-medium'>muhtasim2k2@gmail.com</p>
                <p className='text-gray-400 text-sm'>Email</p>
              </div>
            </div>

            {/* Location */}
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#98B4CE] to-[#2B1942] rounded-2xl shadow-lg flex items-center justify-center transform hover:rotate-0 transition-transform duration-300'>
                  <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
                  </svg>
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-[#98B4CE] to-[#2B1942] rounded-2xl blur opacity-20'></div>
              </div>
              <div>
                <p className='text-white text-lg font-medium'>Doha, Qatar</p>
                <p className='text-gray-400 text-sm'>Location</p>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: -80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800'
          >
            <div className='mb-8'>
              <h2 className='text-3xl font-bold text-[#E48A57] mb-2'>Let's connect</h2>
              <p className='text-white/80'>Send me a message and let's schedule a call!</p>
            </div>

            <form 
              action="https://getform.io/f/bllqzdkb" 
              method="POST"
              className='space-y-6'
            >
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E48A57] transition-colors'
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E48A57] transition-colors'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E48A57] transition-colors'
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E48A57] transition-colors'
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E48A57] transition-colors resize-none'
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className='w-full bg-[#E48A57] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#E48A57]/90 transition-colors duration-200'
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
