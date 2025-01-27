import React, { useState } from 'react';
import { IoIosCube } from "react-icons/io";
import { IoPerson,IoPersonCircle,IoKey  } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = ({ theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={`${theme}`}>
            <div className="header-left">
                
                <div className="logo">
                    {theme === 'header-signin' ? (
                        <img src={require('../images/logo-creative-tim-black.png')} alt="Logo" className="logo-image" /> 
                    ) : (
                        <img src={require('../images/logo-creative-tim-white.png')} alt="Logo" className="logo-image" /> 
                    )}
                    PURITY UI DASHBOARD
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li>
                        <a href="/dashboard" className='nav-image'>
                            {/* <img src={require('../images/Icon.png')} alt="Dashboard" className="nav-image" /> DASHBOARD */}
                            <IoIosCube className='nav-image' />DASHBOARD
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            {/* <img src={require('../images/Icon1.png')} alt="Profile" className="nav-image" /> PROFILE */}
                            <IoPerson className='nav-image'/>PROFILE
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            {/* <img src={require('../images/Icon2.png')} alt="Sign Up" className="nav-image" /> SIGN UP */}
                            <IoPersonCircle className='nav-image'/>SIGN UP
                        </a>
                    </li>
                    <li>
                        <a href="/signin">
                            {/* <img src={require('../images/Icon3.png')} alt="Sign In" className="nav-image" /> SIGN IN */}
                            <IoKey className='nav-image'/>SIGN IN
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-right">
                <button className="download-button">Free Download</button>
            </div>
        </header>
    );
};

export default Header;
