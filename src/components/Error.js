import React from 'react';
import error from '../images/error.png';
import { NavLink } from 'react-router-dom';




function Error() {
    return (
     <div class="error__container">
        <img className="error__img" src={error} alt="error" />
        <NavLink to= "/">
        <button className='error__btn'> Go back </button>
        </NavLink>

       
     </div>
    )

}
export default Error;