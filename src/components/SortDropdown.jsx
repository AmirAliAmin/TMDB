// components/SortDropdown.jsx
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SortDropdown({ selectedSort, setSelectedSort }) {
  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };

  return (
    <div>
      <div className='flex font-medium gap-[170px]'>
        <h1>Sort</h1>
        <div className='absolute left-[200px] text-[30px]'><RiArrowDropDownLine /></div> 
      </div> 
      <div className='mt-5'>
        <p>Sort Result By</p>
        <select
          value={selectedSort}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
          <option value="original_title.asc">Title (A-Z)</option>
          <option value="original_title.desc">Title (Z-A)</option>
        </select>
      </div>  
    </div>
  );
}
