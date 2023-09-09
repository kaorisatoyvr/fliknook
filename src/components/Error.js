import React from 'react';
import error from '../images/error.png';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';



function Error() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <div class="error__container">
            <img className="error__img" src={error} alt="error" />
            <NavLink to="/">
                {isDesktop ? (
                    <button className='error__btn-desktop'> Go back </button>
                ) : (
                    <button className='error__btn-mobile'> Go back </button>
                )
                }
            </NavLink>


        </div>
    )

}
export default Error;