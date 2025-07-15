import React, { useState, useEffect } from "react";
import bgimg from "../assets/image/bg-img.webp";
import Seachbar from "../components/Seachbar";
import trending from "../assets/image/trending-bg.png";
import Card from "../components/Card";

export default function Home() {
  const [timeWindow, setTimeWindow] = useState("day");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=e824bfa11798d99cd1daa91c27d431d1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [timeWindow]);
  return (
    <>
      <div
        className="w-full h-80 border bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div
          className="w-full h-full opacity-75 "
          style={{ backgroundColor: "#00203A" }}
        >
          <div className="px-10 text-white h-[65%] pt-[40px] sm:pt-[90px]">
            <h1 className="font-[900] text-[50px]">Welcome.</h1>
            <p className="text-[25px] font-extrabold">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
          <div className="mx-10 pt-10 sm:pt-5">
            <Seachbar />
          </div>
        </div>
      </div>
      <div
        className="w-full border h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${trending})` }}
      >
        <div className="w-[90%] mx-10 mt-10 gap-10 flex flex-wrap">
          <h1 className="font-extrabold text-[20px]">Trending</h1>
          <div className="border-1 font-bold p-1 px-3 rounded-2xl flex gap-5">
            <button onClick={()=>setTimeWindow("day")}>
              Today
            </button>
            <button onClick={()=>setTimeWindow("week")}
              >
              This Week
            </button>
          </div>
        </div>
        <div className=" mt-20 ml-7 h-[300px] sm:h-[400px] overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie) => (
            <div key={movie.id} className="inline-block mx-2 sm:mx-1 w-[40%] sm:w-[15%]">
              <Card movie={movie} variant="home" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
