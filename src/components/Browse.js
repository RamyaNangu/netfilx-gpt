import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'

const Browse = () => {
  // custom hook
  useNowPlayingMovies()

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
