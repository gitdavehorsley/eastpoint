import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-brand">
          <span className="brand-text">East Point</span>
          <span className="brand-highlight">Construction</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <span>Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              <span>Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <span>Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="tel:8048745821" className="nav-link nav-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="phone-icon">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>804-874-5821</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="btn btn-accent btn-sm">Get Free Estimate</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="mobile-nav">
            <li className="mobile-nav-item">
              <a href="#services" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#portfolio" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
            <li className="mobile-nav-item">
              <a href="tel:8048745821" className="mobile-nav-link mobile-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="phone-icon">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                804-874-5821
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="btn btn-accent" onClick={() => setIsMenuOpen(false)}>Get Free Estimate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
