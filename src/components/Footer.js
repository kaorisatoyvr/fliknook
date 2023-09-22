import React from 'react';
import logo from '../images/fliknook.svg';


function Footer() {
    return (
    <>
    <div className="footer">
    <a href="/"><img src={logo} alt="logo of FlikNook" /></a>
        <div>
            <p>&copy; 2023 FlikNook</p>
            <p>Created by Khushi & Kaori</p>
        </div>
    </div>
    </>
    )
}
export default Footer;