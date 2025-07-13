import React from 'react'
import bgimg from "../assets/image/bg-img.webp"
import Seachbar from '../components/Seachbar'
import trending from '../assets/image/trending-bg.png'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
       <div className='w-full h-80 border bg-cover bg-center' style={{backgroundImage:`url(${bgimg})`}}>
        <div className='w-full h-full opacity-75 ' style={{backgroundColor:"#00203A"}}>
            <div className='px-10 text-white h-[65%] pt-[40px] sm:pt-[90px]'>
            <h1 className='font-[900] text-[50px]'>Welcome.</h1>
            <p className='text-[25px] font-extrabold'>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
        <div className='mx-10 pt-10 sm:pt-5'>
            <Seachbar/>
        </div>
        </div>
       </div>
       <div className='w-full border h-[600px] bg-cover bg-center' style={{backgroundImage:`url(${trending})`}}>
        <div className='border w-[90%] mx-10 mt-10 gap-10 flex flex-wrap'>
            <h1 className='font-extrabold text-[20px]'>Trending</h1>
            <div className='border-1 font-bold p-1 px-3 rounded-2xl flex gap-5'>
                <button>Today</button>
                <button>This Week</button>
            </div>
        </div>
        <div>
          <Card/>
        </div>
       </div>
    </>
  )
}
