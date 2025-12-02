import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>QemaliMUN</h3>
                    <p>Empowering the leaders of tomorrow through diplomacy and debate.</p>
                </div>
                <div className="footer-section">
                    <h3>Join the Conversation</h3>
                    <p>Stay updated with our latest announcements.</p>
                    <a 
                        href="https://chat.whatsapp.com/YOUR_INVITE_LINK_HERE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                    >
                        Join WhatsApp Group
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Qemali Model United Nations. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
