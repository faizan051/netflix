import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);



 const StringBreak =(str,num)=>{
  if(str?.length > num)
  {
    return str.slice(0 , num) + '...';
  }
  else
  {
    return str;
  }

 }

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[40%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border border-gray-300 text-black bg-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 text-white py-2 px-5 ml-3">
              Watch Later
            </button>
          </div>
          <p className="text-gray-500 text-sm">Release:{movie?.release_date}</p>
          <p className='w-full md:w-max-[70%] lg:w-max-[50%] xl:w-max-[35%] text-gray-300'>{StringBreak(movie?.overview, 130)}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Main;
