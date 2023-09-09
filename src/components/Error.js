import React from 'react';
import error from '../images/error.png';




function Error() {
    return (
     <div class="error__container">
        <img className="error__img" src={error} alt="error" />
        <button className='error__btn'> Go back </button>

       
     </div>
    )

}
export default Error;