import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    Qemali<span>MUN</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    {/* Add more links here later like /committees */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
