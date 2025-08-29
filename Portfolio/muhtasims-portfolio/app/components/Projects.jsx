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
        src: campConnectImg  // Project Image location
    },
    {
        title: "Genocide in Gaza – Telling the Story through Data Science",
        desc: "A data analysis project using Python to study genocide-related datasets from Gaza and the West Bank.",
        stack: "Python, Numpy, Matplotlib, datascience library by UC Berkley ",
        git: "https://github.com/mohd-mb2205153/data-science-project",
        src: datascienceImg  // Project Image location
    },
    {
        title: "UniTrack",
        desc: "A full-stack web application designed to manage university academic operations. Built using modern technologies like React, Next.js, Prisma, and NextAuth, it provides a secure, role-based platform for students, instructors, and administrators. ",
        stack: "Next.js, React, SQLite, Prisma, OAuth",
        git: "https://github.com/mohd-mb2205153/camp-connect",
        src: unitrackImg   // Project Image location
    },

]

export default function Projects() {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381A5F] py-18' id='projects'>
        
        <h2 className='text-6xl text-white max-w-[320px] mx-auto font-semibold my-12'>
            Selected <span className='text-orange-400'> Projects </span>
        </h2>

        <div className='max-w-[1000px] mx-auto mt-40 space-y-24 '>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 75}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration:0.5, delay:0.25 }}
                    className={`mt-12 flex ${index % 2 == 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
                >
                    <div className='space-y-2 max-w-[550px] '>
                        <h2 className='text-7xl text-white/70 my-4'>{`0${index+1}`}</h2>
                        <h2 className='text-4xl'>{project.title}</h2>
                        <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                        <p className='text-xl text-orange-400 font-semibold'>{project.stack}</p>
                        <div className='w-64 h-[1px] bg-gray-400 my-4'>
                            <a href={project.git}> Github</a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover 
                            border rounded border-gray-700 "/>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}
