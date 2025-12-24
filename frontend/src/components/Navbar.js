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
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>

                <div className="navbar-actions">
                    {/* Theme Toggle Button */}
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    {/* Hamburger Icon */}
                    <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                {/* Navbar Links */}
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Kreu</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>Rreth Nesh</Link>
                    <Link to="/game" onClick={() => setIsOpen(false)}>Simulator</Link>
                    <Link to="/apply" onClick={() => setIsOpen(false)}>Apliko</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;