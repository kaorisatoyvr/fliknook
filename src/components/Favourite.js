import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import { useSelector, useDispatch } from "react-redux";
import { deleteFav } from "../features/favs/favsSlice";
import favoriteIcon from '../images/heart-red.png';

function Favourite() {
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${appTitle} - Favorite Movies`;
    // dispatch(fetchFavoriteMovies()); // Fetch favorite movies when the component mounts
  }, [dispatch]);

  return (

    <div className="favourite-wrap">
      <h2>Favorite Movies</h2>
      {favs.length < 1 || favs == null ? (
        <p>
          No favorite movies. Return to the <Link to="/">home</Link> page to
          add some favorite movies.
        </p>
      ) : (
        <div className="movies-grid">
          {favs?.map((movie, i) => {
            return (
              <div key={i} className="movie-card">
                <button className="heart-button" onClick={() => dispatch(deleteFav(movie))}>
                <img src={favoriteIcon} alt="Favorite" />
                </button>
                <img className="favourite-movie"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                {/* <p>{movie.overview}</p> */}
                {/* Add more movie details as needed */}
                {/* <button onClick={() => addToFavorites(movie)}>Add to Favorites</button> */}
              </div>
            );

          })}
        </div>
      )}
    </div>
  );
}
export default Favourite;