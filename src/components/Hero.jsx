const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Quality Construction Services in Richmond
          </h1>
          <p className="hero-subtitle">
            Specializing in roofing, siding, and custom deck construction with over 15 years of experience.
          </p>
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn btn-accent"
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:8048745821" 
              className="btn btn-primary"
              style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: '2.5rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        color: 'white',
        animation: 'bounce 2s infinite'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
