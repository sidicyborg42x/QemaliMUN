import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={handleClose}>
                    Qemali<span>MUN</span>
                </Link>

                {/* Hamburger Menu Toggle */}
                <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navigation Links in English */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={handleClose}>Home</Link></li>
                    <li><Link to="/about" onClick={handleClose}>About</Link></li>
                    <li><Link to="/events" onClick={handleClose}>Events</Link></li>
                    <li><Link to="/apply" className="nav-apply-btn" onClick={handleClose}>Apply</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;