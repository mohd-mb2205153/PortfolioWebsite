'use client'
import React from 'react'
import { motion } from "framer-motion"

import campConnectImg from '../../assets/projects/campconnecty.png'

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
        {/* <h1 className='text-4xl text-center'>
            Selected Projects
        </h1>

        <div className=' bg-amber-400 max-w-[1200px] mx-auto space-y-24 '>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                >

                </motion.div>
            ))}
        </div> */}

        <motion.div
            initial={{ x:-100}}
            animate={{x:0}}
            transition={{type:'spring', stiffness:100}}
        >
            Hello
        </motion.div>
    </div>
  )
}
