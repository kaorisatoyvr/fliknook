import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '../hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const MovieCarousel = () => {
  const [carousel, setCarousel] = useState([]);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  useEffect(() => {
    // Function to fetch the tasks from the API
    const getMovieList = async () => {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWRhNGRhMjUzNzM3YzJhNmM4ZjgzNGE5ZDFkNTA1OCIsInN1YiI6IjY0Zjc4YTY4OGUyMGM1MGNkM2VkNWQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se1QwCZIdiuqU4pRDcLmY14CsjIPYaiPuvE_Q8OEjMQ'
        }
      };
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1`, options);
      const data = await response.json();


      setCarousel(data.results);
    };
    getMovieList();
}, []);
let eight = carousel?.slice(0, 8);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3000}
        infiniteLoop={true}
        showStatus={false}
      >
        {eight.map((movie) => (
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
                {isDesktop ? (
                   <div className="posterImage__description">
                   {movie ? movie.overview : ""}
                 </div>
                ) : (

                  <div className="posterImage__description">
                </div>
                )
             }
               
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
