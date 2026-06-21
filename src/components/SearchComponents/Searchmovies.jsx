import React, { useRef, useState, useEffect } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import SearchBarItem from '../Partials/SearchBarItem'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";



const Searchmovies = () => {
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)
    

    const handleSearch = async (keyword) => {
        try {
            setLoading(true)
            setSearched(true)
            const response = await GlobalApi.getSearchMovies(keyword)
            
            setMovieList(response.data.results || [])
        } catch (error) {
            console.error('pencarian gagal', error)
            setMovieList([])
        } finally {
            setLoading(false)
        }
    }
    
    console.log(GlobalApi)
  return (
    <>
    <div className='px-5 py-4'>
    <SearchBarItem onSearch={handleSearch} />
    {loading && (
        <p className='mt-5 text-gray-400'>
            Film Founding!!!
        </p>
    )}
     {!loading && searched && movieList.length === 0 && (
          <p className="mt-5 text-gray-400">
            Film tidak ditemukan
          </p>
        )}

    </div>
    <div className='
            flex
            flex-wrap
            py-4
            px-5
            
            scrollbar-none
            overflow-x-auto
            justify-between
            gap-y-4
            
            '
        >
        {movieList.map((movie) => (
            <img
                className='
                w-[280px]
                object-cover
                
                '
                key={movie.id}
                src={IMAGE_BASE_URL + movie.backdrop_path}
            />
        ))}
        

    </div>
    </>
    
  )
}

export default Searchmovies