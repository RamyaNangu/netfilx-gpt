import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  // custom hook
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
     <Header />
     <MainContainer />
     <SecondaryContainer />
    {/* 
     MainContainer
       -VideoBackground
       -VideoTitle
       SecondaryContainer
       -MoviesList * n
         -cards
          */}
    </div>
  )
}

export default Browse
