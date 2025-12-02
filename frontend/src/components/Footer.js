import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>QSMUN</h3>
                    <p>Zhvillimi i lidershipit, diplomacisë dhe mendimit kritik në gjimnazin "Qemal Stafa".</p>
                </div>
                <div className="footer-section">
                    <h3>Na Kontaktoni</h3>
                    <p>Për njoftimet më të fundit:</p>
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
                <p>&copy; {new Date().getFullYear()} Qemal Stafa Model United Nations. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </footer>
    );
};

export default Footer;
