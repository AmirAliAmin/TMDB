import React from 'react'
import image from '../assets/image/bg-img.webp'

export default function MoviesDetail() {
  return (
    <div className='w-full bg-no-repeat bg-center' style={{backgroundImage:`url(${image})`}}>
        <div className='bg-black opacity-95 flex'>
        <div className='w-[30%] pl-11 border p-10'>
            <img className='h-100 rounded-2xl' src={image} alt="" />
        </div>
        <div className='w-[50%] text-white p-10'>
            <h1 className='text-[40px] font-bold'>The Old Guard 2 (2025)</h1>
            <ul className='flex gap-5 text-[20px]'>
            <li>07/02/2025 (PK)</li>
            <li>Action, Fantasy</li>
            <li>1h 47m</li>
            </ul>
            <p>Eternity has a price.</p>
            <h1>Overview</h1>
            <p>Andy and her team of immortal warriors fight with renewed purpose as they face a powerful new foe threatening their mission to protect humanity.</p>
            <div>
                <div>
                    <h1>Victoria Mahoney</h1>
                    <p>Director</p>
                </div>
                <div>
                    <h1>Greg Rucka</h1>
                    <p>Screenplay</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
