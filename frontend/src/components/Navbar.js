/* frontend/src/components/Navbar.js */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {/* 1. Left: Logo */}
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>

                {/* 2. Right-Side Group: Links and Actions */}
                <div className="nav-main-wrapper">
                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <Link to="/" onClick={() => setIsOpen(false)}>Kreu</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>Rreth Nesh</Link>
                        <Link to="/game" onClick={() => setIsOpen(false)}>Simulator</Link>
                        <Link to="/apply" onClick={() => setIsOpen(false)}>Apliko</Link>
                    </div>

                    <div className="navbar-actions">
                        {/* Minimalist Theme Toggle */}
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'light' ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </button>

                        {/* Hamburger Icon */}
                        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;