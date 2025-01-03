import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGPTSearchView = useSelector(store=>store.gpt.showGPTSearch)

  // custom hook
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
     <Header />
     {showGPTSearchView ? (<GptSearch />) :(
     <>
     <MainContainer />
     <SecondaryContainer />
     </>)}
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
