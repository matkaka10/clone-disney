import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({movie}) => {
  return (
    <>
        <img src={IMAGE_BASE_URL + movie.poster_path }
        className='
        w-[80px]
        md:w-[160px] 
        rounded-lg
        transition-all
        duration-300
        ease-in-out
        hover:scale-105
        hover:border-[3px]
        hover:z-10
        cursor-pointer
        drop-shadow-lg
        
        '
        />

    </>
  )
}

export default MovieCard