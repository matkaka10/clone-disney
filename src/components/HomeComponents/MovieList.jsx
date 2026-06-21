import React from 'react'
import {useEffect, useState} from 'react'
import GlobalApi from '../../Services/GlobalApi'
import MovieCard from './MovieCard'


const MovieList = ({ genreId }) => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId(genreId)
    }, [genreId])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId)
        .then((resp) => {
            // console.log(response.data.results)
            setMovieList(resp.data.results)
        
        })
        .catch(console.error)
    }
  return (
    <div className='
            flex 
            overflow-x-auto
            scrollbar-none 
            gap-5 
            py-2
            mt-[10px]
            pl-2
            '>
        
        {movieList.map((item, index) => {
           return <MovieCard key={item.id} movie={item}/>
        })}
    </div> 
  )
} 

export default MovieList