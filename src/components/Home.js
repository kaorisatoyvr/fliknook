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
    const [movieType, setMovieType] = useState("popular");
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const value = 0.66;

    const onValueChange = (event) => {
        setMovieType(event.target.value);
    }

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
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`, options);
            const data = await response.json();


            setMovieList(data.results);
        };
        getMovieList();
    }, [movieType]);
    let twelve = movieList?.slice(0, 12);
    return (
        <>
            {/* CAROUSEL */}

            <MovieCarousel />
            <form>
                <div>
                    <input id ="popular" type="radio" value="popular" name="movie-type" checked={movieType === "popular"} onChange={onValueChange} />
                    <label htmlFor='popular' className="radio-button">Popular</label>
                    </div>
                <label>
                    <input type="radio" value="top_rated" name="movie-type" checked={movieType === "top_rated"} onChange={onValueChange} />
                    <label className="radio-button">Top Rated</label>
                </label>
                <label>
                    <input type="radio" value="now_playing" name="movie-type" checked={movieType === "now_playing"} onChange={onValueChange} />
                    <label className="radio-button">Now Playing</label>
                </label>
                <label>
                    <input type="radio" value="upcoming" name="movie-type" checked={movieType === "upcoming"} onChange={onValueChange} />
                    <label className="radio-button">Upcoming</label>
                </label>
            </form>


            {twelve === "" ? (
                <h1>Fetching Movie..</h1>
            ) :
                // Desktop < 1024px
                isDesktop ? (

                    <section className="movie-list">
                        {twelve.map((movie) => (
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
                                            backgroundColor: "#0eede4",
                                            textColor: "#fff",
                                            pathColor: "#fff",
                                            trailColor: "transparent",
                                            // Rotation of path and trail, in number of turns (0-1)
                                            // rotation: 0.25,
                                        
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                        
                                            // Text size
                                            textSize: '28px',
                                            fontFamily: 'Poppins',
                                            fontWeight: 700,

                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,
                                        
                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',
                                        
                                            // Colors
                                            pathColor: '#000000',
                                            textColor: '#000000',
                                            trailColor: `rgba(14, 237, 228, ${movie.vote_average / 10})`,
                                            backgroundColor: '#0eede4',
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

                        {twelve.map((movie) => (
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
