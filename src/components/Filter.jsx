import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Filter({ selectedGenres, setSelectedGenres } ) {
    const [open , setOpen] =  useState(false)
  const Genres = [
     { id: 28, title: "Action" },
    { id: 12, title: "Adventure" },
    { id: 16, title: "Animation" },
    { id: 35, title: "Comedy" },
    { id: 80, title: "Crime" },
    { id: 99, title: "Documentary" },
    { id: 18, title: "Drama" },
    { id: 10751, title: "Family" },
    { id: 14, title: "Fantasy" },
    { id: 36, title: "History" },
    { id: 27, title: "Horror" },
    { id: 10402, title: "Music" },
    { id: 9648, title: "Mystery" },
    { id: 10749, title: "Romance" },
    { id: 878, title: "Science Fiction" },
    { id: 10770, title: "TV Movie" },
    { id: 53, title: "Thriller" },
    { id: 10752, title: "War" },
    { id: 37, title: "Western" },
  ];
   const toggleGenre = (id) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };
  return (
    <>
      <div className="border p-3 rounded-2xl">
      <div className="flex font-medium gap-[170px]" onClick={()=>setOpen(!open)}>
        <h1>Filter</h1>
        <div className="absolute left-[200px] text-[30px]">
          <RiArrowDropDownLine />
        </div>
      </div>
      {
        open &&
       <div className="Show me">
           <h1>Show me</h1>
        <ul>
          <li>
            <input type="radio" name="radio" id="" />
            Everthing
          </li>
          <li>
            <input type="radio" name="radio" id="" />
            Movies I Haven't Seen
          </li>
          <li>
            <input type="radio" name="radio" id="" />
            Movies I have Seen
          </li>
        </ul>
      <div className="mt-5">
        <h1 className="">Genres</h1>
        <div className="flex flex-wrap gap-5 mt-2">
       {Genres.map((genre) => (
              <button
                key={genre.id}
                className={`border px-3 py-1 rounded-3xl ${
                  selectedGenres.includes(genre.id) ? "bg-blue-800 text-white" : ""
                }`}
                onClick={() => toggleGenre(genre.id)}
              >
                {genre.title}
              </button>
            ))}
      </div>
      </div>
      </div>
      }
      </div>
      
    </>
  );
}
