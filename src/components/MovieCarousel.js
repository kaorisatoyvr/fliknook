import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
            <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt={movie.title} />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </Carousel>
      </div>


  )
}

export default MovieCarousel;