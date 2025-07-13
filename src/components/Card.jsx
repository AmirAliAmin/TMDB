import React from 'react'
import img from '../assets/image/bg-img.webp'

export default function Card() {
  return (
    <div className='w-50 mt-20 ml-10 '>
      <div className=''>
        <img className='rounded-2xl relative mb-6' src={img} alt="on found" />
        <div className='border-2 w-[40px] h-[40px] p-2 rounded-full bg-blue-950 text-white font-bold text-[12px] absolute bottom-[-295px] left-[60px]'>74%</div>
        <h1 className='font-extrabold pl-5'>Superman</h1>
        <p className='pl-5 text-gray-600'>jul 11, 2025</p>

      </div>
    </div>
  )
}
