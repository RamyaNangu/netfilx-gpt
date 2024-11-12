import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addUpComingMovies} from '../utils/moviesSlice'

const useUpcomingMovies = ()=>{

    
  const dispatch = useDispatch()

  const getUpComingMovies = async ()=>{

    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
    const json = await response.json()
    dispatch(addUpComingMovies(json.results))
    //console.log(json.results)
  }

  useEffect(()=>{
    getUpComingMovies()
  },[])
}

export default useUpcomingMovies