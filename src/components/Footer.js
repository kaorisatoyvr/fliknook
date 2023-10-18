import React from 'react';
import logo from '../images/fliknook.svg';
import favoriteIcon from '../images/heart-red.png';
import { Link } from 'react-router-dom';


function Footer() {
    return (
    <footer className="footer">
    <Link to="/"><img src={logo} alt="logo of FlikNook" /></Link>
        <div>
            <p>Hand coded with <span className="footer-heart"><img  src={favoriteIcon} alt="Heart" /></span> | &copy; Khushi & Kaori 2023</p>
        </div>
    </footer>
    )
}
export default Footer;