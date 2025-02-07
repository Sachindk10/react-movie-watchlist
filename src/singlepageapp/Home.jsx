import React, { useEffect, useState } from 'react'
import { Button, Carousel, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MovieContext } from "../App";
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
  

    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.poster_path})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
          zIndex: 0,
        }}
      ></div>   

      {/* Movie Title & Button */}
      <div className="text-center" style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
          {currentMovie.title}
        </h1>
        <h3 style={{ color: "white"}}>Release Date : {currentMovie.release_date}</h3>
      </div>
    </div>
 


  )
}

export default Home;