import React from 'react'
import SortDropdown from '../components/SortDropdown'
import Filter from '../components/Filter'

export default function Sidebar() {
  return (
    <div className='w-60 ml-5 h-100'>
        <h1 className='font-bold text-[25px]'>Popular Movies</h1>
        <div className='mt-5 border p-3 rounded-2xl'>
        <SortDropdown/>
        </div>
        <div className='mt-5 border p-3 rounded-2xl'>
        <Filter/>
        </div>
    </div>
  )
}
