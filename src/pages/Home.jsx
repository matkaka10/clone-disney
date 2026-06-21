import { useState } from 'react'
import Header from '../components/Partials/Header'
import Slider from '../components/HomeComponents/Slider'
import '../App.css'
import ProductionHouse from '../components/HomeComponents/ProductionHouse'
import GenreMovieList from '../components/HomeComponents/GenreMovieList'


const Home = () => {
  return (
     <>
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
    </>
  )
}

export default Home