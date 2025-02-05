import React, { useContext } from 'react'
import { MovieContext } from '../App'

const MovieDetailsPage = () => {
  const [movieDetail, setMovieDetail] = useContext(MovieContext)
  
  
  return (
    <div>
        <h1>Popular movies this week..</h1>
         
        
    </div>
  )
}

export default MovieDetailsPage