import React from 'react'
import Sidebar from './Sidebar'
import Popular from './Popular'

export default function MoviesSection() {
  return (
    <div>
        <div className='flex gap-10 '>
            <Sidebar/>
            <Popular/>
        </div>
    </div>
  )
}
