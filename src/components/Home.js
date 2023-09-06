import React from 'react';
import { useState, useEffect } from 'react';

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
            {movieList === "" ? (
              <h1>Fetching Movie..</h1>
            ) : (
                
              <section className="movie-list">
                {console.log(movieList)}
                {movieList.map((movie) => (
                  <article className="movie-article" key={movie.id}>
                    
                    {movie.title}
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    </article>
                ))}
              </section>
            )}
          </>
        );
      }

export default Home;