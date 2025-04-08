import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Determines if the device is considered mobile based on window width.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // Controls whether the mobile menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Close the mobile menu when switching to desktop view.
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <Link to="/" style={styles.brand}>
            <img src="corover1.png" alt="Corover Logo" style={styles.logo} />
          </Link>
          {/* Render full menu for desktop; hamburger for mobile */}
          {!isMobile ? (
            <div style={styles.menu}>
              <Link to="/" style={styles.menuItem}>Home</Link>
              <Link to="/diagnosis" style={styles.menuItem}>Quick Diagnosis</Link>
              <Link to="/about" style={styles.menuItem}>About</Link>
            </div>
          ) : (
            <div style={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
            </div>
          )}
        </div>
      </nav>
      {/* Mobile menu dropdown */}
      {isMobile && isMenuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/diagnosis" style={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>Quick Diagnosis</Link>
          <Link to="/about" style={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'navy',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  brand: {
    textDecoration: 'none',
  },
  logo: {
    width: '80px',
    height: 'auto',
  },
  menu: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '20px',
  },
  menuItem: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  hamburger: {
    marginLeft: 'auto',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#FFF',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'navy',
    padding: '10px 20px',
  },
  mobileMenuItem: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
  },
};

export default Header;
