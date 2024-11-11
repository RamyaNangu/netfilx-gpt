import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useMoviesTrailer = (movieId)=>{
    const dispatch = useDispatch()
  // Fetch trailer video and updating the store with trailer video data
  const getMoviesVideos = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
    const json = await response.json()

    const filteredData = json.results.filter(video=>video.type==="Trailer")
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))

  }

    useEffect(()=>{
      getMoviesVideos()
    },[])
}

export default useMoviesTrailer