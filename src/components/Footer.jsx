const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column">
            <h3>East Point Construction</h3>
            <p style={{ marginBottom: '1rem' }}>
              Providing quality roofing, siding, and deck services to Richmond and surrounding counties.
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="tel:8048745821" style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                804-874-5821
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Roofing</a>
              </li>
              <li>
                <a href="#services">Siding</a>
              </li>
              <li>
                <a href="#services">Decks</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '0.5rem', marginTop: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:timchisenhall@yahoo.com">
                  timchisenhall@yahoo.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '0.5rem', marginTop: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Richmond and surrounding counties</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} East Point Construction. All rights reserved.</p>
          
          <div>
            <a 
              href="#contact" 
              className="btn btn-accent"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
