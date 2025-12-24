import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    QS<span>MUN</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/">Kreu</Link>
                    <Link to="/about">Rreth Nesh</Link>
                    <Link to="/game">Simulator</Link> {/* New Link */}
                    <Link to="/apply">Apliko</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
