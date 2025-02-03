import React, { useEffect, useState } from 'react'
import { Button, Carousel, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import  { Adventure_movies }  from './url'
import axios from 'axios'

const Home = ({url}) => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);

        const randomIndex = Math.floor(Math.random() * response.data.results.length); //get random
        setCurrentMovie(response.data.results[randomIndex]);
        console.log("API Response:", response.data.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies.");
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', 
      justifyContent: 'center',alignItems: 'center'}}>
      {currentMovie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} 
            alt={currentMovie.title}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              // maxHeight: '100vh',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <div className='d-flex justify-content-center'>
            <h1 style={{ color: 'white' }}>
              {currentMovie.title}
            </h1>
           
          </div>
        </>
      )}
    </div>

 


  )
}

export default Home;