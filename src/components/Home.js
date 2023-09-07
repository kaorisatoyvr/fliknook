import React from 'react';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {

  // Create a state variable to hold the tasks
  const [movieList, setMovieList] = useState([]);

  // Call the fetchTasks function when the component is first rendered
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
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
      const data = await response.json();
      let twelve = data.results.slice(0, 12);
      setMovieList(twelve);
    };
    getMovieList();
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3000}
          infiniteLoop={true}
          showStatus={false}
        >
          {movieList.map((movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {movieList === "" ? (
        <h1>Fetching Movie..</h1>
      ) :
        window.innerWidth < 1024 ? (

          <section className="movie-list">

            {movieList.map((movie) => (

              <article className="movie-article" key={movie.id}>
                <div className="card">
                  <p className="rate">{movie.vote_average}</p>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                </div>
                <h2 className="card-title">{movie.title}</h2>
                {console.log(movie)}
                <p>{movie.release_date}</p>
              </article>
            ))}
          </section>
        ) : (
          <section className="desktop-list movie-list">

            {movieList.map((movie) => (
              <article className="movie-article" key={movie.id}>
                <p className="rate">{movie.vote_average}</p>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </article>
            ))}
          </section>)
      }
    </>
  );
}

export default Home;