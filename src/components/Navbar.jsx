import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">East Point Construction</div>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="tel:8048745821" className="nav-link" style={{ color: 'var(--primary-color)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'text-bottom' }}>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              804-874-5821
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="btn btn-accent">Get Free Estimate</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container" style={{ paddingTop: 0 }}>
          <ul style={{ listStyle: 'none', padding: '0', margin: '1rem 0' }}>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="tel:8048745821" className="nav-link" style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                804-874-5821
              </a>
            </li>
            <li style={{ margin: '0.75rem 0' }}>
              <a href="#contact" className="btn btn-accent" style={{ display: 'inline-block' }}>Get Free Estimate</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
