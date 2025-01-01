import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setMovie(movies);
      } catch (err) {
        console.log("Error", err);
        setError('Failed load movies error')
      }
      finally {
        setLoading(false)
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) return
    if (loading )return
    setLoading(true)

    try {
      const searchResult = await searchMovies(searchQuery)
      setMovie(searchResult)
      setError(null)
    } catch (err) {
      console.log(err)
      setError('Failed to Search Movies')
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="search"
          className="search-input"
        />
        <button type="submit" className="search-button">
          search&#128269;
        </button>
      </form>
      {error && <div className="error-message">{error }</div>}
      {loading ? (
        <div className="loading">Page Loading</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      )}
    </div>
  );
}
