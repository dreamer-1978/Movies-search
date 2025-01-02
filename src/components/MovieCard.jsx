import "../css/MovieCard.css";
import PropsTypes from "prop-types";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const prefix = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

  const {addFavorites, removeFavorites, isFavorite} =
    useMovieContext();

  const favorite = isFavorite(movie.id)
  
  function onFavoriteClick() {
   if(favorite) removeFavorites(movie.id)
   else addFavorites(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${prefix + movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            <span className={`${favorite ? 'red-heart': ''}`}>♥</span>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    id: PropsTypes.number,
    title: PropsTypes.string,
    release_date: PropsTypes.string,
    poster_path: PropsTypes.string,
    overview: PropsTypes.string,
  }),
};
export default MovieCard;
