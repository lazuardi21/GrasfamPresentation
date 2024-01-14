
import './Footer.css';
import React, { useEffect, useState } from 'react';
// import  LogoSvg from './assets/Images/GrasfamLogo.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const [isContentShort, setIsContentShort] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const contentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            console.log(viewportHeight);
            setIsContentShort(contentHeight < viewportHeight);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ paddingTop: '2%' }}>
           <footer className={`footer-distributed ${isContentShort ? 'fixed-footer' : ''}`}>
                <div className="footer-left">
                    <div>
                        <img src={'/Images/GrasfamLogo-cropped.svg#svgView(viewBox(160, 150, 80, 100))'} alt='Company Logo' style={{ height: 80, width: 180 }} />
                    </div>
                    <p className="footer-links">
                        <a href="#" className="link-1">
                            Home
                        </a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Company Name © 2015</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>
                            <span>444 S. Cedros Ave</span> Solana Beach, California
                        </p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:support@company.com">support@company.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                        euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
