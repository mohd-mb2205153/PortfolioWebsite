'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image";

import campConnectImg from '../../public/assets/projects/campconnecty.png'
import datascienceImg from '../../public/assets/projects/datascience.png'
import unitrackImg from '../../public/assets/projects/unitrack.png'

const projects = [
    {
        title: "CampConnect",
        desc: "A Flutter-based mobile application designed to bridge the gap between displaced students and educational opportunities. The app uses geolocation and real-time data to connect users with nearby educational camps, resources, and mentors, fostering access to structured learning and a supportive community.",
        stack: "Flutter, Dart, Firebase, Google Maps API",
        git: "https://github.com/mohd-mb2205153/camp-connect",
        src: campConnectImg,
        category: "Mobile App"
    },
    {
        title: "Genocide in Gaza – Telling the Story through Data Science",
        desc: "A data analysis project using Python to study genocide-related datasets from Gaza and the West Bank.",
        stack: "Python, Numpy, Matplotlib, datascience library by UC Berkley",
        git: "https://github.com/mohd-mb2205153/data-science-project",
        src: datascienceImg,
        category: "Data Science"
    },
    {
        title: "UniTrack",
        desc: "A full-stack web application designed to manage university academic operations. Built using modern technologies like React, Next.js, Prisma, and NextAuth, it provides a secure, role-based platform for students, instructors, and administrators.",
        stack: "Next.js, React, SQLite, Prisma, OAuth",
        git: "https://github.com/marcus-mm2206892/unitrack",
        src: unitrackImg,
        category: "Web App"
    },
]

export default function Projects() {
  return (
    <section className='py-24 bg-gradient-to-b from-black via-[#0b0813] to-[#1a122a] relative overflow-hidden' id='projects'>
      {/* Background glow effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#E48A57]/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#98B4CE]/10 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4'>
            Selected <span className='text-[#E48A57]'>Projects</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4'>
            Showcasing my work across mobile development, data science, and web applications
          </p>
        </motion.div>

        <div className='space-y-12 md:space-y-16 lg:space-y-20'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(228, 138, 87, 0.2)'
                }}
                className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className='relative group'>
                  <div className='absolute inset-0 bg-gradient-to-r from-[#E48A57]/20 to-[#98B4CE]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                  <div className='relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm'>
                    <Image 
                      src={project.src} 
                      alt={project.title} 
                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className='space-y-4 md:space-y-6'
                >
                  {/* Project Number */}
                  <div className='flex items-center gap-3 md:gap-4'>
                    <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E48A57]/20'>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className='px-4 py-2 bg-[#E48A57]/10 border border-[#E48A57]/20 rounded-full'>
                      <span className='text-[#E48A57] text-sm font-medium'>{project.category}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-[#E48A57] transition-colors duration-300'>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className='text-sm sm:text-base md:text-lg text-white/80 leading-relaxed'>
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className='space-y-3'>
                    <p className='text-sm font-medium text-[#98B4CE] uppercase tracking-wider'>Tech Stack</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.stack.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-white/80 hover:bg-[#E48A57]/20 hover:border-[#E48A57]/40 hover:text-[#E48A57] transition-all duration-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <motion.a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(228, 138, 87, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className='inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#E48A57] text-black font-semibold rounded-xl hover:bg-[#DBAF6E] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                    </svg>
                    View on GitHub
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
