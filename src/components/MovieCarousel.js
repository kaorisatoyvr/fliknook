import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const MovieCarousel = (props) => {
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3000}
        infiniteLoop={true}
        showStatus={false}
      >
        {props.movieList.map((movie) => (
          <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
            <div key={movie.id}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt={movie.title} />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  <p>{movie ? movie.original_title : ""}</p>
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
