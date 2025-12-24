import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    QSMUN<span>.</span>
                </Link>

                <div className={`nav-menu ${active ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setActive(false)}>Ballina</Link>
                    <Link to="/events" onClick={() => setActive(false)}>Eventet</Link>
                    <Link to="/apply" className="nav-btn" onClick={() => setActive(false)}>Apliko</Link>
                </div>

                <div className={`hamburger ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;