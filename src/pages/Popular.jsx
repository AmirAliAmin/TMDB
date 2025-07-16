import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Popular({ selectedGenres, searchTriggered, setSearchTriggered }) {
  const [movie, setMovie] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e824bfa11798d99cd1daa91c27d431d1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        setFilteredMovie(data.results);
      });
  }, []);

  useEffect(() => {
    if (searchTriggered) {
      if (selectedGenres.length === 0) {
        setFilteredMovie(movie);
      } else {
        const filtered = movie.filter((m) =>
          m.genre_ids.some((g) => selectedGenres.includes(g))
        );
        setFilteredMovie(filtered);
      }
      setSearchTriggered(false); // reset after filtering
    }
  }, [searchTriggered, selectedGenres, movie]);

  const navigate = useNavigate();
  const MoviesDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  const truncateOverview = (text) => {
    const maxLength = 40;
    return !text ? "" : text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="w-[100%] sm:w-[80%] gap-5 m-5 flex flex-wrap sm:mt-10">
      {filteredMovie.map((item) => (
        <div key={item.id} className="w-[100%] hidden lg:block sm:w-[18%] border rounded-2xl">
          <Card movie={item} variant="popular" />
        </div>
      ))}
      <div className="w-[100%] block lg:hidden">
        {filteredMovie.map((item) => (
          <div key={item.id} className="w-[100%] mt-5 border flex flex-wrap" onClick={() => MoviesDetail(item.id)}>
            <img
              className="w-[25%]"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <div className="w-[70%]">
              <h1 className="font-bold text-[20px]">{item.title}</h1>
              <p>{truncateOverview(item.overview)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
