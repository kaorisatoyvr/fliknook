import React from 'react';

function About() {
    return (
        <div className="about">
            <h1>Welcome to FlikNook</h1>
            <p>Welcome to FlikNook, your ultimate destination for all things movies! We're passionate about the world of cinema, and we're here to provide you with an exceptional movie-watching experience. Our mission is to make it easier than ever for you to discover, explore, and enjoy your favorite films.</p>

            <div className="who-we-are">
                <div>
                    <h2>Who We Are</h2>
                    <p>FlikNook is a dedicated team of film enthusiasts who understand the magic that unfolds on the silver screen. We're committed to creating a platform that not only celebrates the art of filmmaking but also simplifies the process of finding and enjoying the movies you love.</p>
                </div>

                <div>
                    <h2>The Power of TMDB Integration</h2>
                    <p>"FlikNook's core is our integration with TMDB, the world's most comprehensive movie database. It forms the backbone of our platform, granting you access to a vast array of movie details, from cast and crew to plot summaries, trailers, and more. With TMDB's data, we empower you to make informed decisions about your next watch."</p>
                </div>
            </div>
        </div>
    )
}
export default About;