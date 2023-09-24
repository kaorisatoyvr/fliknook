import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from '../hooks/useMediaQuery';
import { appTitle } from "../globals/globalVariables";
import { useSelector, useDispatch } from "react-redux";
import { deleteFav } from "../features/favs/favsSlice";
import Rate from './Rate';
import favoriteIcon from '../images/heart-red.png';

function Favourite() {
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery('(min-width: 1024px)');


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
        <section className="movie-list favourite-grid">
            {favs?.map((movie, i) => {
              return (
                <article key={i} className="img-container">
                  <div className="favorite-icon">
                    <div className="mobile-img-container">
                      <button className="heart-button" onClick={() => dispatch(deleteFav(movie))}>
                      <img src={favoriteIcon} alt="Favorite" />
                      </button>
                    </div>
                    <Rate movie={movie} />
                      <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                      </Link>
                      {/* Conditionally render movie overview on desktop */}
                      {isDesktop ? (
                      <div className="overlay">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        <p className="overview">{movie.overview}</p>
                        <Link className="more-info" style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}><p>More Info</p></Link>
                      </div>
                      ) : (
                      <>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        </>
                      )}
                  </div>
                </article>
            );
            
            })}
        </section>  
        
      )}
    </div>
  );
}
export default Favourite;