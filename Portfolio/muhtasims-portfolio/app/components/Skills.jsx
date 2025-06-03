import React from 'react'
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

const stackItems = [
  { id: 1, name: 'React', icon: <FaReact size={110} />, color: '#61DAF8' },
  { id: 2, name: 'Next.js', icon: <SiNextdotjs size={110} />, color: '#FAFAFA' },
  { id: 3, name: 'JavaScript', icon: <DiJavascript size={110} />, color: '#F7DF1E' },
  { id: 4, name: 'Tailwind CSS', icon: <RiTailwindCssFill size={110} />, color: '#38BDF8' },
  { id: 5, name: 'Python', icon: <FaPython size={110} />, color: '#3776AB' },
  { id: 6, name: 'Prisma', icon: <SiPrisma size={110} />, color: '#abdbe3' },
  { id: 7, name: 'SQLite', icon: <SiSqlite size={120} />, color: '#003B57' },
  { id: 8, name: 'Java', icon: <FaJava size={110} />, color: '#5382A1' },
  { id: 9, name: 'Flutter', icon: <FaFlutter size={110} />, color: '#02569B' },
  { id: 10, name: 'Firebase', icon: <IoLogoFirebase size={110} />, color: '#FFCA28' },
  { id: 11, name: 'TensorFlow', icon: <SiTensorflow size={110} />, color: '#FF6F00' },
  { id: 12, name: 'Bash', icon: <SiGnubash size={110} />, color: '#babbb7' },
];


export default function Skills() {
  return (
    <div className=' bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-20 ' id='skills'>
      <div className='mx-auto w-[400px] md:min-w-[950px] p-8 text-center'>
        <h2 className='text-6xl text-white font-semibold mx-auto mx-w-[320px] my-12'>My <span className='text-orange-400'> Skills </span></h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
          {stackItems.map((skill) => (
            <div 
              key={skill.id}
              className='flex flex-col items-center justify-between p-4 rounded-xl 
                hover:scale-125 transition-transform duration-300 bg-white/10
                h-[160px] w-[160px] md:h-[220px] md:w-[220px] ' 
              >
                <div style={{ color: skill.color }}>{skill.icon}</div>
                <p className='mt-2'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
