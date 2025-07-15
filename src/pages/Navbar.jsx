import React from 'react'
import logo from '../assets/image/icons/Logo.svg'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <nav className='w-[100%] bg-blue-950 py-8 flex pl-10 '>
            <div className='w-[120px] sm:w-40 lg:w-[10%] '>
                <Link to="/"><img src={logo} alt="not found" /></Link>
            </div>
            <ul className='flex align-items-center gap-7 lg:gap-20 w-60 lg:w-[40%] text-white mx-2 font-bold'>
                <Link to="/movie">movie</Link>
                <li>Tv Shows</li>
                <li>People</li>
            </ul>
        </nav>
    </>
  )
}
