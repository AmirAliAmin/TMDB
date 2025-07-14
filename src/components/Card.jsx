import React from 'react'
import img from '../assets/image/bg-img.webp'

export default function Card({ variant = "default"}) {
   const ratingStyles = {
    default: "bg-blue-950 bottom-[-295px] left-[60px]",
    home: " bottom-[-295px] left-[55px]",
    popular: " bottom-[-750px] left-[320px]",
  };
  const imageStyles ={
    default :"rounded-2xl",
    home : "rounded-2xl",
    popular: "rounded-t-2xl"
  }
  return (
    <div>
        <img className={`relative mb-6 ${imageStyles[variant]}`} src={img} alt="on found" />
        <div  className={`absolute bg-blue-950 w-[40px] h-[40px] p-2 rounded-full text-white font-bold text-[12px] ${ratingStyles[variant]}`}>74%</div>
        <h1 className='font-extrabold pl-5'>Superman</h1>
        <p className='pl-5 text-gray-600'>jul 11, 2025</p>
    </div>
  )
}
