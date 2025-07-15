import React from 'react'
import SortDropdown from '../components/SortDropdown'
import Filter from '../components/Filter'
import SearchBtn from '../components/SearchBtn'

export default function Sidebar() {
  return (
    <div className='w-[100%] sm:w-[20%] sm:ml-10 mx-8'>
        <h1 className='font-bold text-[25px]'>Popular Movies</h1>
        <div className='mt-5 border p-3 rounded-2xl'>
        <SortDropdown/>
        </div>
        <div className='mt-5'>
        <Filter/>
        </div>
        <div>
            <SearchBtn/>
        </div>
    </div>
  )
}