"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion } from "framer-motion"

const experiencesData = [
  {
    id: "s3labs-2025",
    role: "Frontend Developer Intern",
    org: "S3 Lab",
    location: "Doha, Qatar",
    dates: "October 2025 - Present",
    logo: "/assets/experiences/s3lab/s3Logo.png",
    description:
      "Building the frontend for CAID, an AI-powered carbon emissions dashboard, focusing on data visualization, usability, and seamless integration with AI services.",
    bullets: [
      "Developing the frontend for CAID, an AI-driven carbon emissions analytics dashboard, using TypeScript, React, and Next.js to help sustainability teams visualize and track their impact.",
      "Integrating backend services and AI models with the frontend via REST APIs, enabling near real-time carbon insights and reducing manual data handling for users.",
      "Collaborating with designers and ML engineers to ship responsive, accessible UI components, and containerizing the app with Docker and Kubernetes for scalable, reliable deployments."
    ],
    gallery: [
      {
        src: "/assets/experiences/s3lab/caid.png",
        caption: "CAID carbon emissions analytics dashboard UI"
      },
      {
        src: "/assets/experiences/s3lab/caid2.png",
        caption: "Reusable frontend components built with React and TypeScript"
      }
    ],
  },
  {
    id: "siemens-2025",
    role: "Grid Software Intern - Smart Infrastructure",
    org: "Siemens WLL",
    location: "Doha, Qatar",
    dates: "June 2025 - July 2025",
    logo: "/assets/experiences/siemens/siemens.jpg",
    description:
      "Worked on grid software and smart infrastructure initiatives focusing on forecasting, dashboards, and IoT integrations.",
    bullets: [
      "Trained and deployed LSTM based AI models on smart meter data for consumption forecasting.",
      "Built Power BI dashboards with live MDMS data for Kahramaa LV visibility.",
      "Configured Modbus, BACnet, MQTT to stream MFM and solar metrics to IoT gateways.",
      "Supported technical sales docs for PSS SINCAL proposal for 2.8M QAR EWA bid.",
    ],
    gallery: [
      {
        src: "/assets/experiences/siemens/finalday1.jpeg",
        caption: "Certificate awared by CFO & Head of P&O Siemens Qatar",
      },
      {
        src: "/assets/experiences/siemens/finalday3.jpeg",
        caption: "Final Day presentation",
      },
      {
        src: "/assets/experiences/siemens/mobility-1.jpg",
        caption: "Siemens Mobility Tram Depot",
      },
      {
        src: "/assets/experiences/siemens/dashboard1.mp4",
        caption: "Advance Analytics Dashboard of Kahramaa LV Insight",
      },
    ],
  },
  ,
  {
    id: "qu-research-2025",
    role: "Research Intern",
    org: "Qatar University",
    location: "Doha, Qatar",
    dates: "May 2025 – June 2025",
    logo: "/assets/experiences/qu/qu-logo.png",
    description:
      "Smart Warning System for Distracted Delivery Motorcyclists Using Machine Learning",
    bullets: [
      "Contributed to the Development of a CNN-based mobile application that can detect rider distraction even when motorcyclists are wearing helmets",
      "Created a custom data set, comprised of 1,799 images (balanced: “Looking” vs. “Not Looking”), in different lighting conditions, helmets and backgrounds.",
      "Built a Flutter-based mobile app that runs passively in the background and delivers over the screen alerts, which reduced distractions without sudden interruptions.",
    ],
    gallery: [
      { src: "/assets/experiences/qu/Group picture.png", caption: "Award Ceremony" },
      { src: "/assets/experiences/qu/Slide2.png", caption: "Overview" },
      { src: "/assets/experiences/qu/Slide5.png", caption: "Mobile App" }
    ],
  }
]

function ExperienceCard({ experience }) {
  const [index, setIndex] = useState(0)
  const [showDescription, setShowDescription] = useState(false)
  const total = experience.gallery.length

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)
  const toggleDescription = () => setShowDescription(!showDescription)

  const active = experience.gallery[index]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(228, 138, 87, 0.15)',
        borderColor: '#E48A57'
      }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/40 border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-75 group"
    >
        <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 flex-shrink-0 group-hover:border-[#E48A57] transition-colors duration-300"
          >
            <Image src={experience.logo} alt={`${experience.org} logo`} fill sizes="64px" className="object-contain p-2 rounded-xl" />
          </motion.div>
                  <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#E48A57] transition-colors duration-300">
              {experience.role}
            </h3>
            <p className="text-[#98B4CE] font-medium group-hover:text-[#DBAF6E] transition-colors duration-300">{experience.org}</p>
            <p className="text-white/70 text-sm">{experience.location} • {experience.dates}</p>
          </div>
      </div>

      <div className="mt-4 sm:mt-6 grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-stretch">
        {/* Carousel */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/40 group-hover:border-[#E48A57] transition-colors duration-300"
        >
          <div className="relative w-full aspect-video">
            {active.src.endsWith('.mp4') || active.src.endsWith('.webm') || active.src.endsWith('.mov') ? (
              <video
                src={active.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2">
            {active.caption}
          </div>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 sm:p-2 backdrop-blur border border-white/20 text-lg sm:text-xl"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 sm:p-2 backdrop-blur border border-white/20 text-lg sm:text-xl"
          >
            ›
          </button>
          <div className="absolute top-3 right-3 text-xs text-white/80 bg-black/40 rounded-full px-2 py-0.5">
            {index + 1}/{total}
          </div>
        </motion.div>

        {/* Description */}
        <div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{experience.description}</p>
          
          {/* Mobile-only toggle button */}
          <motion.button
            onClick={toggleDescription}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden mt-3 sm:mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E48A57]/20 to-[#DBAF6E]/20 border border-[#E48A57]/30 rounded-lg text-[#E48A57] text-sm font-medium hover:bg-[#E48A57]/30 hover:border-[#E48A57]/50 transition-all duration-300"
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showDescription ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {showDescription ? 'Hide Details' : 'Show Details'}
          </motion.button>

          {/* Bullet points - hidden on mobile by default, always visible on desktop */}
          <motion.ul 
            initial={false}
            animate={{ 
              height: showDescription ? 'auto' : 0,
              opacity: showDescription ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:!h-auto md:!opacity-100 list-disc list-inside mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-white/80 overflow-hidden"
          >
            {experience.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experiences() {
  return (
    <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 md:py-20 lg:py-24 bg-[linear-gradient(to_bottom,#000,#0b0813_30%,#1a122a_70%)]" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
           My <span className='text-[#E48A57]'>Experience</span>
        </motion.h2>

        <div className="mt-8 md:mt-12 lg:mt-14 space-y-6 md:space-y-8 lg:space-y-10">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
