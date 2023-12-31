import React from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../images/fliknook-logo-long.svg';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import Hamburger from 'hamburger-react';
import { useState } from 'react';


function Header() {
    const [isOpen, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const toggleMobileMenu = () => {
        setOpen(!isOpen);
    }

    const closeMobileMenu = () => {
        setOpen(false);
    }


    return (

        <header>
            {isDesktop ?
                <div className="desktop-header">
                    <h1 className="header__title">
                        <Link to="/"><img className="header-logo" src={logo2} alt="logo of FlikNook" /></Link>
                    </h1>
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
                    <h1 className="mobile__header__title">
                        <Link to="/"><img className="header-logo-mobile" src={logo2} alt="logo of FlikNook" /></Link>
                    </h1>
                    {/* https://hamburger-react.netlify.app/ */}
                    <Hamburger className="hamburger" toggled={isOpen} toggle={toggleMobileMenu}
                        size={30}
                        direction="right"
                        // duration={0.8}
                        color="#46CBB2"
                        easing="ease-in"
                        label="Show menu"

                        onToggle={toggleMobileMenu}

                    />
                    {isOpen && (
                        <nav className="mobile-nav">
                            <ul>
                                <li>
                                    {/* Links */}
                                    <NavLink activeClassName="active" to="/" onClick={closeMobileMenu} >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/about" onClick={closeMobileMenu} >About</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/favourite" onClick={closeMobileMenu} >Favourite</NavLink>
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