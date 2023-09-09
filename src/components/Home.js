import React from 'react';
import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import MovieCarousel from './MovieCarousel';
import { Link } from 'react-router-dom';

function Home() {

  // Create a state variable to hold the tasks
  const [movieList, setMovieList] = useState([]);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

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
    {/* CAROUSEL */}
    
    <MovieCarousel movieList={movieList}/>
   
      

      {movieList === "" ? (
        <h1>Fetching Movie..</h1>
      ) :
        isDesktop ? (

          <section className="movie-list">

            {movieList.map((movie) => (
               <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
                 <article className="movie-article" key={movie.id}>
                    <div className="card">
                    <p className="rate">{movie.vote_average}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h2 className="card-title">{movie.title}</h2>
                    <p>desktop</p>
                    <p>{movie.release_date}</p>
                    </article>
                  </Link>

                ))}
                </section>
            ):(
                <section className="desktop-list movie-list">
            
                {movieList.map((movie) => (
                 <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
                
                <article className="movie-article" key={movie.id}>
                <p className="rate">{movie.vote_average}</p>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </article>
              </Link>
            ))}
          </section>)
      }
    </>
  );
}

export default Home;