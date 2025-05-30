'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image";

import campConnectImg from '../../public/assets/projects/campconnecty.png'

const projects = [
    {
        title: "CampConnect",
        desc: "A Flutter-based mobile application designed to bridge the gap between displaced students and educational opportunities. The app uses geolocation and real-time data to connect users with nearby educational camps, resources, and mentors, fostering access to structured learning and a supportive community.",
        stack: "",
        git: "https://github.com/mohd-mb2205153/camp-connect",
        src: campConnectImg  // Project Image location
    },
    {
        title: "CampConnect",
        desc: "A Flutter-based mobile application designed to bridge the gap between displaced students and educational opportunities. The app uses geolocation and real-time data to connect users with nearby educational camps, resources, and mentors, fostering access to structured learning and a supportive community.",
        stack: "",
        git: "https://github.com/mohd-mb2205153/camp-connect",
        src: campConnectImg  // Project Image location
    },
    {
        title: "CampConnect",
        desc: "A Flutter-based mobile application designed to bridge the gap between displaced students and educational opportunities. The app uses geolocation and real-time data to connect users with nearby educational camps, resources, and mentors, fostering access to structured learning and a supportive community.",
        stack: "",
        git: "https://github.com/mohd-mb2205153/camp-connect",
        src: campConnectImg   // Project Image location
    },

]

export default function Projects() {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381A5F] py-18' id='portfolio'>
        <h1 className='text-4xl text-center'>
            Selected Projects
        </h1>

        <div className='max-w-[1200px] mx-auto space-y-24 '>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 75}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration:0.5, delay:0.25 }}
                >
                    <div>
                        <h2>{`0${index+1}`}</h2>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <p>{project.stack}</p>
                        <div>
                            
                        </div>
                    </div>

                    

                    <div className='flex justify-center items-center'>
                        <Image src={project.src} alt={project.title} className="h-[400px] w-auto object-cover"/>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}
