import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rate from './Rate';

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
            <div className="currentmovie__intro">
                <img className="currentmovie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`} alt="current movie" />
            </div>
            <div className="currentmovie__detail">
                <div className="currentmovie__detailleft">

                    <img className="currentmovie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`} alt="current movie" />

                </div>

                <div className="currentmovie__detailRight">
                    <div className="currentmovie__detailRightTop">
                        <div className="currentmovie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="currentmovie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="current__rating">
                        <Rate movie={currentMovieDetail} />

                        </div>

                        <div className="currentmovie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="currentmovie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="currentmovie__genres">{currentMovieDetail && currentMovieDetail.genres ?
                            currentMovieDetail.genres.map(genre => (
                                <>
                                    <span className="currentmovie__genre" id={genre.id}>
                                        {genre.name}
                                    </span>
                                </>
                            ))
                            :
                            ""
                        }
                        </div>
                    </div>
                    <div className="currentmovie__detailRightBottom">
                        <div className="synopsisText">Detail</div>
                        <div className="currentmovie__description">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Individual;