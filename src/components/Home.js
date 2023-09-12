import React from 'react';
import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import MovieCarousel from './MovieCarousel';
import { Link } from 'react-router-dom';

function Home() {


    // Create a state variable to hold the tasks
    const [movieList, setMovieList] = useState([]);
    const [movieType, setMovieType] = useState("popular");
    const isDesktop = useMediaQuery('(min-width: 1024px)');

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
                <label>
                    <input type="radio" value="popular" name="movie-type" checked={movieType === "popular"} onChange={onValueChange} />
                    <label className="radio-button">Popular</label>
                </label>
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
                                    <p className="rate">{movie.vote_average}</p>
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
