import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upComingMovies &&
    <div className='bg-black'>
      <div className=' -mt-52 relative z-10'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"UpComing Movies"} movies={movies.upComingMovies}/>
      {/* 
      MovieList - popular
        MovieCards * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Hirror
       */}
       </div>
    </div>
  )
}

export default SecondaryContainer
