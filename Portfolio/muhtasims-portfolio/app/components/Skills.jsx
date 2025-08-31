'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTensorflow } from "react-icons/si";
import { SiSqlite } from "react-icons/si"; 
import { SiGnubash } from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { id: 1, name: 'React', icon: <FaReact size={48} />, color: '#61DAF8', level: 83 },
      { id: 2, name: 'Next.js', icon: <SiNextdotjs size={48} />, color: '#FAFAFA', level: 85 },
      { id: 3, name: 'JavaScript', icon: <DiJavascript size={48} />, color: '#F7DF1E', level: 95 },
      { id: 4, name: 'Tailwind CSS', icon: <RiTailwindCssFill size={48} />, color: '#38BDF8', level: 71 },
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { id: 5, name: 'Python', icon: <FaPython size={48} />, color: '#3776AB', level: 88 },
      { id: 6, name: 'Prisma', icon: <SiPrisma size={48} />, color: '#abdbe3', level: 80 },
      { id: 7, name: 'SQLite', icon: <SiSqlite size={48} />, color: '#003B57', level: 85 },
      { id: 8, name: 'Java', icon: <FaJava size={48} />, color: '#5382A1', level: 90 },
    ]
  },
  {
    name: "Mobile & AI",
    skills: [
      { id: 9, name: 'Flutter', icon: <FaFlutter size={48} />, color: '#02569B', level: 76 },
      { id: 10, name: 'Firebase', icon: <IoLogoFirebase size={48} />, color: '#FFCA28', level: 85 },
      { id: 11, name: 'TensorFlow', icon: <SiTensorflow size={48} />, color: '#FF6F00', level: 78 },
      { id: 12, name: 'Bash', icon: <SiGnubash size={48} />, color: '#babbb7', level: 84 },
    ]
  }
];

export default function Skills() {
  return (
    <section className='py-24 bg-gradient-to-b from-[#1a122a] via-[#0b0813] to-black relative overflow-hidden' id='skills'>
      {/* Subtle background glow effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-[#E48A57]/3 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#98B4CE]/3 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-6'>
            My <span className='text-[#E48A57]'>Skills</span>
          </h2>
          <p className='text-xl text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='space-y-20'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className='space-y-12'
            >
              {/* Category Header */}
              <div className='text-center'>
                <h3 className='text-2xl md:text-3xl font-semibold text-white mb-3'>
                  {category.name}
                </h3>
                <div className='w-16 h-0.5 bg-gradient-to-r from-[#E48A57] to-[#98B4CE] mx-auto rounded-full opacity-60'></div>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.08 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -8,
                    }}
                    className='group'
                  >
                    {/* Skill Card */}
                    <div className='relative bg-gray-900/20 border border-gray-800/30 rounded-xl p-6 hover:bg-gray-900/30 hover:border-gray-700/50 transition-all duration-300 h-full'>
                      <div className='flex flex-col items-center text-center space-y-5'>
                        {/* Icon */}
                        <div className='relative'>
                          <div 
                            className='absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          <div 
                            className='relative transition-transform duration-300 group-hover:scale-110'
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className='text-base font-medium text-white group-hover:text-[#E48A57] transition-colors duration-300'>
                          {skill.name}
                        </h4>

                        {/* Skill Level */}
                        <div className='w-full space-y-2'>
                          <div className='flex justify-between text-xs text-white/50 mb-2'>
                            <span>Proficiency</span>
                            <span className='font-medium'>{skill.level}%</span>
                          </div>
                          <div className='w-full bg-gray-800/30 rounded-full h-1.5 overflow-hidden'>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.2, delay: 0.3 + skillIndex * 0.05, ease: "easeOut" }}
                              className='h-full rounded-full transition-all duration-500'
                              style={{ 
                                background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`,
                                boxShadow: `0 0 8px ${skill.color}30`
                              }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-24 text-center'
        >
          <div className='bg-gray-900/20 border border-gray-800/30 rounded-2xl p-10 backdrop-blur-sm hover:bg-gray-900/30 hover:border-gray-700/50 transition-all duration-300'>
            <h3 className='text-2xl font-semibold text-white mb-4'>
              Always Learning
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto leading-relaxed'>
              I'm constantly expanding my skill set and exploring new technologies to stay current with industry trends and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

