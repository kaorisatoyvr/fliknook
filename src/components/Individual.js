import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rate from './Rate';
import FavButton from './FavButton';
// import { useSelector } from "react-redux";

function Individual() {
    const [currentMovieDetail, setMovieDetail] = useState({ backdrop_path: "" });
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
            if (data) {

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
        <div className="current__movie">
            <div>
                <img className="currentmovie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`} alt="current movie" />
            </div>
            <div className="currentmovie__detail">
                {/* movie image */}
                <div className="currentmovie__detailleft">
                    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`} alt="current movie" />
                </div>
                {/* movie details text */}
                <div className="currentmovie__detailRight">
                        <h2>
                            {currentMovieDetail ? currentMovieDetail.original_title : ""}
                        </h2>
                        <p>
                            {currentMovieDetail ? currentMovieDetail.tagline : ""}</p>
                        <div className="rate-favourite">
                            {/* <div className="current__rating"> */}
                                <Rate movie={currentMovieDetail} />
                            {/* </div> */}
                            <div>
                                {/* individual__heart__button */}
                                <FavButton characterObj={currentMovieDetail} />
                            </div>
                        </div>
                        <div className="movie__details">
                            <p>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</p>
                            <p>・</p>
                            <p>{currentMovieDetail ? currentMovieDetail.release_date : ""}</p>
                        </div>
                        <div className="currentmovie__genres">
                            {currentMovieDetail && currentMovieDetail.genres ?
                            currentMovieDetail.genres.map(genre => (
                                <>
                                    <p id={genre.id}>
                                        {genre.name}
                                    </p>
                                </>
                            ))
                            :
                            ""
                        }
                        </div>
                            <h3>Overview</h3>
                            <p>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                </div>
            </div>
        </div>
    )
}
export default Individual;