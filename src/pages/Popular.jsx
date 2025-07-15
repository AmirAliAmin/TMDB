import React, { useEffect, useState} from "react";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

export default function Popular() {
  const [movie, setMovie] = useState([]);

  const truncateOverview = (text) => {
    const maxLength = 40; // Adjust character limit for roughly 2 lines
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e824bfa11798d99cd1daa91c27d431d1"
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);

  const navigate = useNavigate();
  const MoviesDetail = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="w-[100%] sm:w-[80%] gap-5 m-5 flex flex-wrap sm:mt-10">
      {movie.map((item) => (
        <div className="w-[100%] hidden lg:block sm:w-[18%] border rounded-2xl">
          <Card key={item.id} movie={item} variant="popular" />
        </div>
      ))}
      <div className="w-[100%] block lg:hidden">
        {movie.map((item) => (
          <div key={item.id} className="w-[100%] mt-5 border flex flex-wrap" onClick={()=>MoviesDetail(item.id)}>
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
