import { useState } from 'react'
import './App.css'
import NavigationBar from './singlepageapp/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './singlepageapp/Home'

import PropsMovies from './singlepageapp/PropsMovies'
import { Adventure_movies, Animation_movies, Comedy_movies } from './singlepageapp/url'
import MovieDetailsPage from './singlepageapp/MovieDetailsPage';

function App() {

  return (
    <div>
    <BrowserRouter>
        <NavigationBar />

        <Home url={Animation_movies} />
        <Routes>
          {/* <Route path="/home" element={<Home  />}/> */}
          {/* <Route path="/adventure" element={<AdventureMovies/>}/>
          <Route path='/animation' element={<AnimationMovies/>}/>
          <Route path='/comedy' element={<ComedyMovies />}/>   */}

          <Route path='/adventure' element={<PropsMovies url={Adventure_movies}/>} />
          <Route path='/animation' element={<PropsMovies url= {Animation_movies}/>} />
          <Route path='/comedy' element={<PropsMovies url= {Comedy_movies}/>} />
          <Route path='/details' element={<MovieDetailsPage />}/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;
