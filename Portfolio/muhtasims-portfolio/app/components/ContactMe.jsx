import React from 'react'

export default function ContactMe() {
  return (
    <div className=''>
      <h1 className='text-6xl font-bold text-center'> Contact <span className='text-orange-400'>Me</span> </h1>
      <div className='bg-gray-300/10 mt-12 rounded-2xl w-[1000px] mx-auto p-10'> 
        <form action="">
            <div className='flex space-x-5 m-10 font-semibold'>
              <label htmlFor="">First Name</label>
              <input type="text" className='border border-gray-700 rounded-xl'/>
            </div>
            <div className='flex space-x-5 m-10 font-semibold'>
              <label htmlFor="">Last Name</label>
              <input type="text" className='border border-gray-700 rounded-xl' />
            </div>
            <div className='flex space-x-5 m-10 font-semibold'>
              <label htmlFor="">Email</label>
              <input type="email" className='border border-gray-700 rounded-xl'/>
            </div>
            <div className='flex space-x-5 m-10 font-semibold'>
              <label htmlFor="">Message</label>
              <textarea name="" id="" className='border border-gray-700 rounded-xl w-[700px]'></textarea>
            </div>
            
            <button className='bg-orange-700 rounded-3xl text-white font-semibold w-[125px] h-[40px] '>Send</button>
        </form>
      </div>
    </div>
  )
}
