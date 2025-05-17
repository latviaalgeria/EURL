import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import background from '../assets/background.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track window width to toggle mobile menu and hamburger
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    AOS.init({ duration: 800 });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundSize: isMobile ? 'contain' : 'cover',
        backgroundPosition: isMobile ? 'top center' : 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        color: 'white',
      }}
    >
      <header
        style={{
          backgroundColor: 'rgba(47, 133, 90, 0.85)',
          color: 'white',
          padding: '15px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Phyto Safety Logo" style={{ height: '40px', marginRight: '12px' }} />
          <h1 style={{ fontSize: '1.8rem', margin: 0 }}>Phyto Safety</h1>
        </Link>

        {/* Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 25,
            }}
          >
            <span style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></span>
            <span style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></span>
            <span style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></span>
          </button>
        )}

        {/* Navigation Links */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '20px' }}>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile menu */}
      {menuOpen && isMobile && (
        <nav
          style={{
            backgroundColor: 'rgba(47, 133, 90, 0.95)',
            position: 'absolute',
            top: '60px',
            right: 0,
            left: 0,
            zIndex: 15,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: '10px 0',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Main content with animation */}
      <main
        style={{
          flexGrow: 1,
          maxWidth: '960px',
          margin: '20px auto',
          padding: '20px',
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderRadius: '8px',
        }}
        data-aos="fade-up"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2F855A', textAlign: 'center', padding: '20px 10px', color: 'white' }}>
        <div style={{ marginBottom: '10px' }}>
          <a
            href="https://www.facebook.com/profile.php?id=61574780871853&locale=fr_FR"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ margin: '0 10px', color: 'white' }}
          >
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" style={{ margin: '0 10px', color: 'white' }}>
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ margin: '0 10px', color: 'white' }}>
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ margin: '0 10px', color: 'white' }}>
            <FaInstagram size={24} />
          </a>
        </div>
        © {new Date().getFullYear()} Phyto Safety. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
