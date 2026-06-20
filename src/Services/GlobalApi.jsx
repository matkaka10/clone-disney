import axios from "axios"

const movieBaseUrl = import.meta.env.VITE_APP_TMDB_BASE_URL
const apiKey = import.meta.env.VITE_APP_TMDB_API_KEY

const getTrendingVideos = () => {
    return axios.get(
        `${movieBaseUrl}/trending/all/day`,{
        params:
        {
            api_key:apiKey

        }
 } );
}

const getMovieByGenreId = (genreId) => {
    return axios.get(`${movieBaseUrl}/discover/movie`, {
        params: {
            api_key: apiKey,
            with_genres: genreId
        }
    })
}
 
const GlobalApi = {
    getTrendingVideos,
    getMovieByGenreId
}

export default GlobalApi;