import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e824bfa11798d99cd1daa91c27d431d1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div className="text-white text-center mt-40">Loading...</div>;
  }

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path || movie.poster_path})`,
      }}
    >
      <div className="bg-black opacity-85 flex flex-wrap px-10 py-10 gap-10">
        <div className="w-full md:w-[30%]">
          <img
            className="rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="w-full md:w-[60%] text-white">
          <h1 className="text-[40px] font-bold mb-2">
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h1>
          <ul className="flex flex-wrap gap-5 text-[18px] mb-4">
            <li>{movie.release_date}</li>
            <li>{movie.genres?.map((g) => g.name).join(', ')}</li>
            <li>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </li>
          </ul>
          <p className="italic text-gray-300 mb-4">{movie.tagline}</p>
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p className="mb-6">{movie.overview}</p>

          {/* Static Crew info - can be made dynamic using TMDB credits API */}
          <div className="flex gap-10">
            <div>
              <h3 className="font-semibold">Victoria Mahoney</h3>
              <p className="text-gray-400">Director</p>
            </div>
            <div>
              <h3 className="font-semibold">Greg Rucka</h3>
              <p className="text-gray-400">Screenplay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
