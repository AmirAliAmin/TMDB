import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SortDropdown() {
    const [open, setOpen] = useState(false)

  return (
    <>
        <div className='flex font-medium gap-[170px]' onClick={()=>setOpen(!open)}>
            <h1>Sort</h1>
            <div className='absolute left-[220px] text-[30px]'>< RiArrowDropDownLine /></div> 
        </div> 
        {
            open &&
        <div className='mt-5'>
            <p>Sort Result By</p>
                <select name="" id="">
                    <option>Popularity Decending</option>
                    <option>Popularity Acending</option>
                    <option>Rating Decending</option>
                    <option>Rating Acending</option>
                    <option>Release Date Decending</option>
                    <option>Relase Date Acending</option>
                    <option>Title(A-Z)</option>
                    <option>Title(Z-A) </option>
                </select>
        </div>  
        } 
    </>
  )
}
