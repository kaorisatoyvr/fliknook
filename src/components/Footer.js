import React from 'react';
import logo from '../images/fliknook.svg';


function Footer() {
    return (
    <>
    <div className="footer">
    <a href="/"><img src={logo} alt="logo of FlikNook" /></a>
    <p>&copy; 2023 FlikNook</p>
    </div>
    </>
    )
}
export default Footer;