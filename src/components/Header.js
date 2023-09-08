import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/fliknook.svg';
import useMediaQuery from '../hooks/useMediaQuery';

function Header() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (

        <header>

             {isDesktop ? 
             <div className="desktop-header">
                <a href="/"><img className="header-logo" src={logo} alt="logo of FlikNook" /></a>
             <p>Desktop</p>
             <nav className="desktop-nav">
             <ul>
                 <li>
                     {/* Links */}
                 <NavLink to ="/">Home</NavLink>
                 </li>
                 <li>
                 <NavLink to ="/about">About</NavLink>
                 </li>
                 <li>
                 <NavLink to ="/favourite">Favourite</NavLink>
                 </li>
             </ul>
            </nav>
            </div>
             : <div className="mobile-header">
             <a href="/"><img className="header-logo" src={logo} alt="logo of FlikNook" /></a>
             <p>Mobile</p>
                <nav className="mobile-nav">
                <ul>
                    <li>
                        {/* Links */}
                    <NavLink to ="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to ="/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to ="/favourite">Favourite</NavLink>
                    </li>
                </ul>
                </nav>
                </div>}
            
        </header>
    )

}
export default Header;