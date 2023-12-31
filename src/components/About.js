import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import logo from '../images/fliknook.svg';
import tmdb from '../images/tmdb.svg';
import fliknook from '../images/fliknook-about.png';
import { Link } from 'react-router-dom';

function About() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <>
        {isDesktop ? (
        <div className="about">
        <div className="welcome about-wrap">
            <div className="about-logo">
                <Link to="/"><img src={logo} alt="logo of FlikNook" /></Link>
            </div>
            <div>
                <h1>Welcome to FlikNook</h1>
                <p>Welcome to FlikNook, your ultimate destination for all things movies! We're passionate about the world of cinema, and we're here to provide you with an exceptional movie-watching experience. Our mission is to make it easier than ever for you to discover, explore, and enjoy your favorite films.</p>
            </div>
        </div>
        <div className="who-we-are about-wrap">
            <div>
                <h2>Who We Are</h2>
                <p>FlikNook is a dedicated team of film enthusiasts who understand the magic that unfolds on the silver screen. We're committed to creating a platform that not only celebrates the art of filmmaking but also simplifies the process of finding and enjoying the movies you love.</p>
            </div>
            <div className="fliknook-about">
                <Link to="/about"><img src={fliknook} alt="FlikNook" /></Link>
            </div>
        </div>
        <div className="tmdb about-wrap">
            <div>
                <Link to="https://www.themoviedb.org/?language=en-CA"><img src={tmdb} alt="logo of TMDB" /></Link>
            </div>
            <div>
                <h2>The Power of TMDB Integration</h2>
                <p>"FlikNook's core is our integration with TMDB, the world's most comprehensive movie database. It forms the backbone of our platform, granting you access to a vast array of movie details, from cast and crew to plot summaries, trailers, and more. With TMDB's data, we empower you to make informed decisions about your next watch."</p>
            </div>
        </div>
        </div>
    ) : (
        <div className="about">
            <div className="welcome about-wrap">
                <div>
                    <h1>Welcome to FlikNook</h1>
                    <p>Welcome to FlikNook, your ultimate destination for all things movies! We're passionate about the world of cinema, and we're here to provide you with an exceptional movie-watching experience. Our mission is to make it easier than ever for you to discover, explore, and enjoy your favorite films.</p>
                </div>
                <div className="about-logo">
                    <Link to="/"><img src={logo} alt="logo of FlikNook" /></Link>
                </div>
            </div>
            <div className="who-we-are about-wrap">
                <div>
                    <h2>Who We Are</h2>
                    <p>FlikNook is a dedicated team of film enthusiasts who understand the magic that unfolds on the silver screen. We're committed to creating a platform that not only celebrates the art of filmmaking but also simplifies the process of finding and enjoying the movies you love.</p>
                </div>
                <div className="about-logo">
                    <Link to="/about"><img src={fliknook} alt="FlikNook" /></Link>
                </div>
            </div>
            <div className="tmdb about-wrap">
                <div>
                    <h2>The Power of TMDB Integration</h2>
                    <p>"FlikNook's core is our integration with TMDB, the world's most comprehensive movie database. It forms the backbone of our platform, granting you access to a vast array of movie details, from cast and crew to plot summaries, trailers, and more. With TMDB's data, we empower you to make informed decisions about your next watch."</p>
                </div>
                <div>
                    <Link to="https://www.themoviedb.org/?language=en-CA"><img src={tmdb} alt="logo of TMDB" /></Link>
                </div>
            </div>
        </div>
    )}
        </>
    )
}
export default About;