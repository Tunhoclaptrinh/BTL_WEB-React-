import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';

const Footer = () => {
  const customerServices = [
    'Accounting services',
    'Booking guide',
    'Payment methods',
    'Return Policy',
    'Warranty',
    'Q&A',
  ];

  const socialMediaLinks = [
    { name: 'facebook', url: 'https://facebook.com', icon: 'facebook_social media_social_icon.png' },
    { name: 'google', url: 'https://google.com', icon: 'google_brand_branding_logo_network_icon.png' },
    { name: 'instagram', url: 'https://instagram.com', icon: 'instagram_social media_social_icon.png' },
    { name: 'youtube', url: 'https://youtube.com', icon: 'video_youtube_logo_social_social media_icon.png' },
    { name: 'pinterest', url: 'https://pinterest.com', icon: 'inspiration_pin_pinned_pinterest_social network_icon.png' },
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/logotun.png" alt="Logo" />
      </div>
      
      <div className="footer-columns">
        {/* About Us */}
        <ul className="footer-column">
          <h3>About Us</h3>
          <li><Link to="/about/introduction">Introduction</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/partners">Partners</Link></li>
        </ul>
        
        {/* Customer Service */}
        <ul className="footer-column">
          <h3>Customer Service</h3>
          {customerServices.map((service) => (
            <li key={service}>
              <Link to={`/customer-service/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                {service}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Newsletter */}
        <ul className="footer-column Newsletter">
          <h3>Newsletter</h3>
          <li>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </li>
          <li>
            <h1>
              <a href="tel:+0246662343" className="Hotline">
                Hotline: 0246 662 3434
              </a>
            </h1>
          </li>
        </ul>
        
        {/* Download App */}
        <ul className="footer-column">
          <h3>Download App</h3>
          <div>
            <img
              src="/images/appstore.png"
              alt="Apple Store"
              onClick={() => window.open('https://apps.apple.com', '_blank')}
            />
            <br />
            <img
              src="/images/googleplay.png"
              alt="Google Play"
              onClick={() => window.open('https://play.google.com', '_blank')}
            />
          </div>
        </ul>
      </div>
      
      {/* Social Media Links */}
      <div className="footer-socials">
        {socialMediaLinks.map((social) => (
          <img
            key={social.name}
            src={`/images/${social.icon}`}
            alt={social.name}
            onClick={() => window.open(social.url, '_blank')}
          />
        ))}
      </div>
      
      {/* Copyright Section */}
      <div className="footer-rights">
        <img src="/images/dmca.png" alt="DMCA" />
        <img src="/images/logo_bct.webp" alt="BCT Logo" />
        <p>© 2024 NguỹnTún All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
