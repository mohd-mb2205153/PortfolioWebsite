"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion } from "framer-motion"

const experiencesData = [
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
      "Trained and deployed LSTM models on smart meter data for consumption forecasting.",
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
    //   {
    //     src: "/assets/experiences/siemens/dashboard-1.mp4",
    //     caption: "Advance Analytics Dashboard of Kahramaa LV Insight",
    //   },
    ],
  },
  {
    id: "qu-research-2024",
    role: "Research Intern",
    org: "Qatar University",
    location: "Doha, Qatar",
    dates: "May 2024 – Aug 2024",
    logo: "/assets/experiences/qu/qu-logo.png",
    description:
      "AI-driven literature mining and evidence synthesis to study drugs that affect bleeding under the College of Dental Medicine.",
    bullets: [
      "Built AI tool to extract drugs/effects from literature, improving productivity by 70%.",
      "Performed systematic review on anti-platelet and anti-thrombotic medications.",
      "Led manual screening with 8 researchers, aligning with FDA inclusion/exclusion.",
    ],
    gallery: [
      { src: "/assets/experiences/qu/Slide1.png", caption: "Poster of Our Study" },
      { src: "/assets/experiences/qu/prisma.png", caption: "Systematic review workflow and PRISMA steps" },
      { src: "/assets/experiences/qu-3.jpg", caption: "Team screening sessions validating AI outputs" },
    ],
  },
//   {
//     id: "acm-tech-2025",
//     role: "Tech Team Member",
//     org: "ACM - QU Chapter",
//     location: "Qatar University",
//     dates: "May 2025 – Present",
//     logo: "/assets/experiences/acm-logo.png",
//     description:
//       "Contributing to student-led tech initiatives, projects, and internship program enablement at ACM QU.",
//     bullets: [
//       "Selected to the core tech team to drive high-impact initiatives.",
//       "Contributing to 3 projects improving learning and campus experience.",
//       "Helping launch a Software Engineering Internship Program for 1st–3rd years.",
//     ],
//     gallery: [
//       { src: "/assets/experiences/acm-1.jpg", caption: "Building student-led tech projects at ACM QU" },
//       { src: "/assets/experiences/acm-2.jpg", caption: "Workshops and collaborative sprints" },
//       { src: "/assets/experiences/acm-3.jpg", caption: "Internship program planning and mentorship" },
//     ],
//   },
]

function ExperienceCard({ experience }) {
  const [index, setIndex] = useState(0)
  const total = experience.gallery.length

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

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
      className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-75 group"
    >
              <div className="flex items-start gap-4 md:gap-6">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 flex-shrink-0 group-hover:border-[#E48A57] transition-colors duration-300"
          >
            <Image src={experience.logo} alt={`${experience.org} logo`} fill sizes="64px" className="object-contain p-2" />
          </motion.div>
                  <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E48A57] transition-colors duration-300">
              {experience.role}
            </h3>
            <p className="text-[#98B4CE] font-medium group-hover:text-[#DBAF6E] transition-colors duration-300">{experience.org}</p>
            <p className="text-white/70 text-sm">{experience.location} • {experience.dates}</p>
          </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6 items-stretch">
        {/* Carousel */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/40 group-hover:border-[#E48A57] transition-colors duration-300"
        >
          <div className="relative w-full aspect-video">
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2">
            {active.caption}
          </div>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur border border-white/20"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur border border-white/20"
          >
            ›
          </button>
          <div className="absolute top-3 right-3 text-xs text-white/80 bg-black/40 rounded-full px-2 py-0.5">
            {index + 1}/{total}
          </div>
        </motion.div>

        {/* Description */}
        <div>
          <p className="text-white/80 leading-relaxed">{experience.description}</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white/80">
            {experience.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experiences() {
  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,#000,#0b0813_30%,#1a122a_70%)]" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
           My <span className='text-[#E48A57]'>Experience</span>
        </motion.h2>

        <div className="mt-14 space-y-10">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
