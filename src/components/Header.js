import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
            <a href="/">Logo</a>
            <nav>
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
        
        </header>
    )

}
export default Header;