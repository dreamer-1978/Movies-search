import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";
export default function Favorites() {
  const { favorites } = useMovieContext();
  
  if (favorites.length) {
    return (
      <div>
        <h2 className="favorites-movie">Мои Любимые Фильмы</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="favorites-empty">
      <h2>No Favorites Movies</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  }

}
