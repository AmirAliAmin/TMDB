import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Filter() {
    const [open , setOpen] =  useState(false)
  const Genres = [
    {
      id: 1,
      title: "Action",
    },
    {
      id: 2,
      title: "Adventure",
    },
    {
      id: 3,
      title: "Animation",
    },
    {
      id: 4,
      title: "Comedy",
    },
    {
      id: 5,
      title: "Crime",
    },
    {
      id: 6,
      title: "Documentary",
    },
    {
      id: 7,
      title: "Drama",
    },
    {
      id: 8,
      title: "Family",
    },
    {
      id: 9,
      title: "Fantasy",
    },
    {
      id: 10,
      title: "History",
    },
    {
      id: 11,
      title: "Horror",
    },
    {
      id: 12,
      title: "Music",
    },
    {
      id: 13,
      title: "Mystery",
    },
    {
      id: 14,
      title: "Romance",
    },
    {
      id: 15,
      title: "Science Fiction",
    },
    {
      id: 16,
      title: "Tv Movie",
    },
    {
      id: 17,
      title: "Thriller",
    },
    {
      id: 18,
      title: "War",
    },
    {
      id: 19,
      title: "West",
    },
  ];
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
        {Genres.map((genres) =>( 
            <button key={genres.id} className="border p-1 rounded-3xl">{genres.title}</button>
        ))}
      </div>
      </div>
      </div>
      }
      </div>
      
    </>
  );
}
