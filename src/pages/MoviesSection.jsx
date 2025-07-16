import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Popular from './Popular';

export default function MoviesSection() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <div className='flex flex-wrap sm:flex-nowrap gap-10 w-[100%]'>
      <Sidebar
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        onSearch={handleSearch}
      />
      <Popular
        selectedGenres={selectedGenres}
        searchTriggered={searchTriggered}
        setSearchTriggered={setSearchTriggered} // reset after search
      />
    </div>
  );
}
