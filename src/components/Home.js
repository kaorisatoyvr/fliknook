import React from 'react';
import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import MovieCarousel from './MovieCarousel';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

            <MovieCarousel movieList={movieList} />


            {movieList === "" ? (
                <h1>Fetching Movie..</h1>
            ) :
                // Desktop < 1024px
                isDesktop ? (
                    <section className="movie-list">
                        {movieList.map((movie) => (
                            <article key={movie.id}>
                                <div className="img-container">
                                    <div className="rate"  style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar 
                                        value={Number(movie?.vote_average/ 10)} 
                                        maxValue={1} 
                                        text={`${movie.vote_average * 10}%`} 
                                        background
                                        backgroundPadding={6}

                                        styles={buildStyles({
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                        
                                            // Text size
                                            textSize: '28px',
                                            fontWeight: 700,

                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,
                                        
                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',
                                        
                                            // Colors
                                            pathColor: '#000000',
                                            textColor: '#000000',
                                            trailColor: 'grey',
                                            backgroundColor: 'rgba(70,203,178,0.8)',
                                          })}
                                         />;
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

                                    <div className="overlay">
                                        <h2 className="card-title">{movie.title}</h2>
                                        <p>{movie.release_date}</p>
                                        <p className="overview">{movie.overview}</p>
                                        <Link className="more-info" style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}><p>More Info</p></Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                ) : (
                    // mobile > 1024px
                    <section className="mobile-movie-list">

                        {movieList.map((movie) => (
                            <article className="movie-article" key={movie.id}>
                                <div className="mobile-img-container">
                                    <p className="mobile-rate">{movie.vote_average}</p>
                                    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                    </Link>
                                </div>
                                <h2>{movie.title}</h2>
                                <p>mobile</p>
                                <p>{movie.release_date}</p>
                            </article>
                        ))}
                    </section>)
            }
        </>
    );
}

export default Home;
