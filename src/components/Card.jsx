import React from 'react'
import img from '../assets/image/bg-img.webp'
import { useNavigate } from 'react-router-dom';

export default function Card({ variant = "default" ,movie}) {
   const ratingStyles = {
    default: "bg-blue-950 bottom-[65px] left-[20px]",
    home: " bottom-[-15px] left-[15px]",
    popular: " bottom-[-15px] left-[15px]",
  };
  const imageStyles ={
    default :"rounded-2xl",
    home : "rounded-2xl",
    popular: "rounded-t-2xl"
  }
  const navigate = useNavigate();
  const MoviesDetail = (id)=>{
    navigate(`/movie/${id}`)
  }
  return (
    <div  onClick={()=>MoviesDetail(movie.id)}>
      <div className='relative' >
        <img className={` mb-6 ${imageStyles[variant]}`} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div  className={`absolute bg-blue-950 w-[40px] h-[40px] p-2 rounded-full text-white font-bold text-[12px] ${ratingStyles[variant]}`}>{Math.round(movie.vote_average * 10)}%</div>
      </div>
        <h1 className='font-extrabold pl-5 overflow-hidden'>{movie.title}</h1>
        <p className='pl-5 text-gray-600'>{movie.release_date}</p>
    </div>
  )
}
