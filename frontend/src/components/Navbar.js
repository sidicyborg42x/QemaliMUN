import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>
                
                {/* Mobile Toggle */}
                <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span><span></span><span></span>
                </div>

                <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Kreu</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>Rreth Nesh</Link>
                    <Link to="/game" onClick={() => setIsOpen(false)}>Simulator</Link>
                    <Link to="/apply" className="nav-apply-btn" onClick={() => setIsOpen(false)}>Apliko</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
