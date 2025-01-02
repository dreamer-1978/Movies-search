import './css/App.css'
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from './pages/Favorites'
import NavBar from "./components/NavBar";
import {MovieProvider} from './contexts/MovieContext'



function App() {
  // const [movies, setMovie] = useState([]);
  // const apiKey = "663c286cddddcedc64c906f63799fb4a";
  // useEffect(() => {
  //   const movieUrl =
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=ru-RU&page=1&sort_by=popularity.desc";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjNjMjg2Y2RkZGRjZWRjNjRjOTA2ZjYzNzk5ZmI0YSIsIm5iZiI6MTczNTUxOTU4OC40MjUsInN1YiI6IjY3NzFlZDY0MWYyYzVkOTMwMTkyYjNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X-EOooMRdd2mifdvsBaWqnex-7mvcqc8B8YuX4C4ocg",
  //     },
  //   };
  //   async function getMovieBase() {
  //    try {
  //      const res = await fetch(movieUrl, options);
  //      if (res.ok) {
  //        const dataMovie = await res.json();
  //        setMovie(dataMovie?.results);
  //      } else {
  //        console.log("error network...", res.status, res.statusText);
  //      }
  //    } catch (error) {
  //     console.error('fetch request error...', error)
  //    }
  //   }
  // getMovieBase()
  // }, [])
  

  return (
    <MovieProvider>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App
