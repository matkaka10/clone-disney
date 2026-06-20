import React from 'react'
import {useState, useEffect} from 'react'
import GenresList from '../constant/GenresList'
import GlobalApi from '../Services/GlobalApi'
import MovieList from './MovieList'

const MovieByGenre = ({ genre }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ignore = false

        setLoading (true)
        setError (null)

        GlobalApi.getMovieByGenreId(genre.id).then((response) => {
            if (!ignore) {
                setMovies(response.data.results ?? [])
            }
        })
        .catch((error) => {
            console.log(
                'Gagal mengambil data ${genre.name}:',
                error
            )

            if (!ignore) {
                setError('Gagal mengambil data')
            }
        })
        .finally(() => {
            if (!ignore) {
                setLoading(false)
            }
        })

        return() => {
            ignore = true
        }

        return () => {
            ignore = true
        }
    }, [genre.id])

    return (
    <section>
      <h2>{genre.name}</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p>Tidak ada film.</p>
      )}

      <div>
        {/* {movies.slice(0, 8).map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))} */}
      </div>
    </section>
  )
}

const GenreMovieList = () => {    
  return (
    <div className='mt-5'>
        {GenresList.genres.map((genre, index)=> (
            
            <div className='p-4 px-8 md:px-16' key={genre.id}>
            
                <h2 className='
                    text-white 
                    text-[20px] 
                    font-bold
                    mb-3'> 
                    <MovieByGenre key={genre.id} genre={genre} />
                </h2>
                    <MovieList genreId={genre.id} />
            </div>
        ))}
        
    </div>
  )
}

export default GenreMovieList