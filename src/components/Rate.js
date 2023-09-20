import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

{/* Progress bar: https://www.npmjs.com/package/react-circular-progressbar */}
// test
function Rate({ movie }) {
    return(
    
    <div className="rate mobile-rate current__rating"  style={{ width: 60, height: 60 }}>
        {movie ? (
        <CircularProgressbar 
            value={Number(movie.vote_average/ 10)} 
            maxValue={1} 
            text={`${(movie.vote_average * 10).toFixed(0)}%`} 
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
            pathColor: 'hotpink',
            textColor: '#000000',
            trailColor: 'grey',
            backgroundColor: 'rgba(70,203,178,0.8)',
        })}
        /> 
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
}

export default Rate;
