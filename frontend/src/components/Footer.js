/* sidicyborg42x/qemalimun/frontend/src/components/Footer.js */
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>QSMUN</h3>
                    <p>Empowering the leaders of tomorrow through diplomacy and debate at Qemal Stafa High School.</p>
                </div>
                <div className="footer-section">
                    <h3>Na Kontaktoni</h3>
                    <p>Për çdo pyetje apo informacion, na shkruani:</p>
                    <a 
                        href="mailto:mulgecierjona@gmail.com" 
                        className="contact-btn"
                    >
                        mulgecierjona@gmail.com
                    </a>
                </div>
            </div>
            {/* Centered Bottom Section */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Qemal Stafa Model United Nations. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;