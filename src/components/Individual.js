import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Individual() {
    const [currentMovieDetail, setMovieDetail ] = useState({backdrop_path:""});
    const { id } = useParams();

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
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, options);
          const data = await response.json();
          if (data){
       
          setMovieDetail(data);
          }
          else {
            // Handle the case where data.results is undefined
            console.error('Movie details not found.');
            // You can set a default value or take other actions here
          }
        };
        getMovieList();
      }, [id]);
     
    return (
        <div className ="current_movie">
            <div className= "movie__intro">
            <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`} alt= "current movie" />
            </div>
            
        </div>
    )
}
export default Individual;