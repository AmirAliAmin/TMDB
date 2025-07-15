import React from 'react'
import Sidebar from './Sidebar'
import Popular from './Popular'

export default function MoviesSection() {
  return (
    <div>
        <div className='flex flex-wrap sm:flex-nowrap gap-10 w-[100%] '>
            <Sidebar/>
            <Popular/>
        </div>
    </div>
  )
}
