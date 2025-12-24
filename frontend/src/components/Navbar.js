import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Links - Pushed to the right */}
                <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Kreu</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>Rreth Nesh</Link>
                    <Link to="/game" onClick={() => setIsMenuOpen(false)}>Simulator</Link>
                    <Link to="/apply" className="nav-apply-btn" onClick={() => setIsMenuOpen(false)}>Apliko</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;