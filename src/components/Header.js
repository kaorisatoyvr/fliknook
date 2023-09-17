import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/fliknook.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import Hamburger from 'hamburger-react';
import { useState } from 'react';


function Header() {
    const [isOpen, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const toggleMobileMenu = () => {
        setOpen(!isOpen);
    }


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
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/favourite">Favourite</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                : <div className="mobile-header">
                    <a href="/"><img className="header-logo" src={logo} alt="logo of FlikNook" /></a>
                    <p>Mobile</p>
                    {/* https://hamburger-react.netlify.app/ */}
                    <Hamburger className="hamburger" toggled={isOpen} toggle={toggleMobileMenu}
                        size={30}
                        direction="right"
                        // duration={0.8}
                        color="#0eede4"
                        easing="ease-in"
                        label="Show menu"

                        onToggle={toggled => {
                            if (toggled) {
                                // open a menu
                            } else {
                                // close a menu
                            }
                        }}

                    />
                    {isOpen && (
                        <nav className="mobile-nav">
                            <ul>
                                <li>
                                    {/* Links */}
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/favourite">Favourite</NavLink>
                                </li>
                            </ul>

                        </nav>
                    )
                    }

                </div>}

        </header>
    )

}
export default Header;