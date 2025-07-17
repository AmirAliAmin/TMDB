import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Popular from './Popular';

export default function MoviesSection() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [selectedSort, setSelectedSort] = useState('popularity.desc'); // default sort

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <div className='flex flex-wrap sm:flex-nowrap gap-10 w-[100%]'>
      <Sidebar
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        onSearch={handleSearch}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <Popular
        selectedGenres={selectedGenres}
        selectedSort={selectedSort}
        searchTriggered={searchTriggered}
        setSearchTriggered={setSearchTriggered}
      />
    </div>
  );
}
