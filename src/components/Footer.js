import React from 'react';
import logo from '../images/fliknook.svg';
import favoriteIcon from '../images/heart-red.png';


function Footer() {
    return (
    <>
    <div className="footer">
    <a href="/"><img src={logo} alt="logo of FlikNook" /></a>
        <div>
            {/* <p>&copy; Khushi & Kaori 2023</p> */}
            <p>Hand coded with <span className="footer-heart"><img  src={favoriteIcon} alt="Heart" /></span> | &copy; Khushi & Kaori 2023</p>
        </div>
    </div>
    </>
    )
}
export default Footer;