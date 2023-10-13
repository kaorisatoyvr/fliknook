import React from 'react';
import logo from '../images/fliknook.svg';
import favoriteIcon from '../images/heart-red.png';


function Footer() {
    return (
    <footer className="footer">
    <a href="/fliknook"><img src={logo} alt="logo of FlikNook" /></a>
        <div>
            <p>Hand coded with <span className="footer-heart"><img  src={favoriteIcon} alt="Heart" /></span> | &copy; Khushi & Kaori 2023</p>
        </div>
    </footer>
    )
}
export default Footer;