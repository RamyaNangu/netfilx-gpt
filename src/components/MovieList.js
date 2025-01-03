import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  //console.log(movies)

  return (
    <div className='p-2'> 
      <h1 className='text-3xl font-bold text-white'>{title}</h1>
      <div  className='flex overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        <div  className='flex'>
          {movies.map((movie=>{
            return  <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          }))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
