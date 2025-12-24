import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>

                {/* Hamburger Icon */}
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
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